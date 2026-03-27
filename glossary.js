// ==================== GLOSSARY MODULE ====================
// Lưu ý: Bạn cần copy mảng glossaryData đầy đủ vào đầu file này trước khi sử dụng.
// const glossaryData = [ ... ]; // toàn bộ dữ liệu thuật ngữ (tự copy từ file cũ)
const glossaryData = [
    {
        term: "Game Mechanics",
        definition: "Cơ chế trò chơi là tập hợp các quy tắc, hệ thống và tương tác cốt lõi xác định cách người chơi hành động và thế giới phản hồi. Bao gồm nhảy, chiến đấu, thu thập tài nguyên, hệ thống nhiệm vụ — nền tảng cho mọi trải nghiệm gameplay."
    },
    {
        term: "Level Design",
        definition: "Thiết kế màn chơi tập trung vào việc xây dựng không gian, bố cục, nhịp độ thử thách và dẫn dắt người chơi. Level Design ảnh hưởng trực tiếp đến cảm xúc, sự khám phá và tính tái chơi."
    },
    {
        term: "NPC (Non-Player Character)",
        definition: "Nhân vật không do người chơi điều khiển, được lập trình bởi AI để cung cấp cốt truyện, nhiệm vụ, đối thoại hoặc tạo thử thách. NPC làm sống động thế giới game và thúc đẩy mạch truyện."
    },
    {
        term: "Loot Box",
        definition: "Cơ chế kiếm tiền dưới dạng hộp phần thưởng ngẫu nhiên, chứa vật phẩm mỹ phẩm hoặc tăng sức mạnh. Gây tranh cãi vì tính may rủi, nhưng được nhiều game sử dụng để duy trì doanh thu."
    },
    {
        term: "RPG Elements",
        definition: "Yếu tố nhập vai như hệ thống chỉ số, cây kỹ năng, trang bị, cấp độ nhân vật và lựa chọn phân nhánh. Giúp người chơi phát triển nhân vật và gia tăng chiều sâu chiến thuật."
    },
    {
        term: "Sandbox",
        definition: "Thiết kế trao quyền tự do cao cho người chơi, ít ép buộc tuyến tính. Người chơi tự tạo mục tiêu, tự khám phá và tự sinh ra trải nghiệm của riêng mình."
    },
    {
        term: "Procedural Generation",
        definition: "Sinh nội dung bằng thuật toán thay vì làm tay hoàn toàn, ví dụ map, item, dungeon, nhiệm vụ. Giúp tăng tính tái chơi và giảm khối lượng sản xuất nội dung."
    },
    {
        term: "Player Agency",
        definition: "Mức độ mà lựa chọn của người chơi thực sự tạo ra tác động lên gameplay, thế giới hoặc kết cục. Agency cao làm người chơi thấy quyết định của họ có ý nghĩa."
    },
    {
        term: "Emergent Gameplay",
        definition: "Lối chơi phát sinh ngoài dự kiến từ sự kết hợp giữa nhiều cơ chế đơn giản. Đây thường là dấu hiệu của hệ thống mạnh và giàu chiều sâu."
    },
    {
        term: "Game Loop",
        definition: "Vòng lặp hành động lặp đi lặp lại trong game, ví dụ chiến đấu → nhận thưởng → nâng cấp → chiến đấu tiếp. Nếu loop yếu, game chết rất nhanh."
    },
    {
        term: "Balancing",
        definition: "Quá trình điều chỉnh chỉ số, phần thưởng, độ khó và tương tác hệ thống để tránh thứ gì đó quá mạnh hoặc quá phế. Balance không phải công bằng tuyệt đối, mà là hợp lý."
    },
    {
        term: "Diegetic UI",
        definition: "UI được tích hợp trực tiếp vào thế giới game thay vì nổi riêng trên màn hình, ví dụ thanh máu trên suit, bản đồ cầm tay. Nó giúp tăng nhập vai."
    },
    {
        term: "PvE / PvP",
        definition: "PvE là Player versus Environment, người chơi đấu với hệ thống hoặc AI. PvP là Player versus Player, người chơi đấu trực tiếp với nhau."
    },
    {
        term: "Ragdoll Physics",
        definition: "Mô phỏng cơ thể nhân vật bằng vật lý khi ngã, chết hoặc va chạm. Thường tạo cảm giác chân thực hoặc hài hước."
    },
    {
        term: "Metagame",
        definition: "Phần chiến thuật hoặc tối ưu nằm ngoài trận đấu trực tiếp, ví dụ build mạnh nhất, lựa chọn tướng theo meta, tối ưu đội hình, nghiên cứu patch."
    },

    // SYSTEM & MECHANICS
    {
        term: "Core Loop",
        definition: "Chuỗi hành động chính lặp đi lặp lại tạo nên trải nghiệm cốt lõi của game. Một core loop tốt phải dễ hiểu, có phần thưởng rõ ràng và đủ hấp dẫn để lặp lại."
    },
    {
        term: "Mechanics",
        definition: "Các hành động, quy tắc và cách tương tác cụ thể trong game như nhảy, bắn, né, đẩy block, chế đồ. Mechanics là đơn vị nhỏ nhất của gameplay."
    },
    {
        term: "System Design",
        definition: "Thiết kế cách nhiều mechanics liên kết với nhau thành một hệ thống lớn như chiến đấu, kinh tế, progression, social hoặc crafting. Designer giỏi là người hiểu tương tác giữa các hệ thống, không chỉ từng mechanic lẻ."
    },
    {
        term: "RNG (Random Number Generation)",
        definition: "Yếu tố ngẫu nhiên trong game như tỉ lệ crit, tỉ lệ rơi đồ, spawn vị trí hoặc kết quả gacha. RNG tạo bất ngờ nhưng lạm dụng sẽ gây ức chế."
    },
    {
        term: "Buff",
        definition: "Tăng sức mạnh cho nhân vật, vật phẩm, kỹ năng hoặc chiến thuật nhằm cải thiện tính cạnh tranh hoặc độ hữu dụng."
    },
    {
        term: "Nerf",
        definition: "Giảm sức mạnh của một yếu tố đang quá mạnh hoặc phá meta. Nerf đúng giúp game khỏe hơn, nerf ngu làm cộng đồng chửi."
    },
    {
        term: "Overpowered (OP)",
        definition: "Chỉ thứ gì đó mạnh vượt chuẩn cân bằng chung, khiến người chơi cảm thấy phải dùng nó mới tối ưu."
    },
    {
        term: "Underpowered (UP)",
        definition: "Chỉ thứ gì đó yếu hơn mặt bằng chung, ít được chọn vì không đủ hiệu quả hoặc không đáng đầu tư."
    },
    {
        term: "Win State",
        definition: "Điều kiện để người chơi chiến thắng trong một màn, một trận hoặc một vòng chơi."
    },
    {
        term: "Lose State / Fail State",
        definition: "Điều kiện thất bại của người chơi như hết máu, hết thời gian, bị phát hiện hoặc mất mục tiêu quan trọng."
    },
    {
        term: "Objective",
        definition: "Mục tiêu người chơi cần hoàn thành trong ngắn hạn hoặc dài hạn, ví dụ thoát map, giết boss, thu thập tài nguyên, sống sót qua đêm."
    },
    {
        term: "Progression",
        definition: "Quá trình người chơi trở nên mạnh hơn, mở khóa thêm nội dung hoặc tiến sâu hơn vào game qua thời gian."
    },
    {
        term: "Meta Progression",
        definition: "Tiến trình tồn tại ngoài từng run hoặc từng trận riêng lẻ, ví dụ mở vĩnh viễn kỹ năng mới, nhân vật mới, relic mới."
    },
    {
        term: "Power Curve",
        definition: "Đường tăng sức mạnh của người chơi hoặc kẻ địch theo thời gian. Power curve lệch sẽ làm game quá dễ hoặc quá bóp."
    },
    {
        term: "Difficulty Curve",
        definition: "Nhịp tăng độ khó theo tiến trình game. Tăng quá gắt thì người chơi bỏ, tăng quá chậm thì người chơi chán."
    },
    {
        term: "Skill Floor",
        definition: "Mức kỹ năng tối thiểu để bắt đầu chơi ổn một game hoặc một mechanic."
    },
    {
        term: "Skill Ceiling",
        definition: "Mức trần kỹ năng tối đa mà người chơi có thể thể hiện. Ceiling cao giúp game có chiều sâu lâu dài."
    },
    {
        term: "Risk vs Reward",
        definition: "Nguyên tắc thiết kế trong đó hành động càng nguy hiểm thì phần thưởng càng đáng. Nếu rủi ro cao mà thưởng thấp là thiết kế ngu."
    },
    {
        term: "Cooldown",
        definition: "Khoảng thời gian chờ trước khi kỹ năng hoặc hành động có thể được dùng lại."
    },
    {
        term: "Combo",
        definition: "Chuỗi hành động nối tiếp nhau để tạo hiệu quả mạnh hơn, mượt hơn hoặc đẹp hơn một hành động đơn lẻ."
    },
    {
        term: "Resource Management",
        definition: "Thiết kế và sử dụng các tài nguyên như mana, stamina, vàng, đạn, lượt đi hoặc thời gian để tạo quyết định chiến thuật."
    },
    {
        term: "Resource Sink",
        definition: "Nơi tài nguyên bị tiêu hao khỏi nền kinh tế game, ví dụ nâng cấp, sửa đồ, mua vé quay, craft."
    },
    {
        term: "Resource Faucet",
        definition: "Nguồn bơm tài nguyên vào game, ví dụ nhiệm vụ, thắng trận, login reward, farm quái."
    },

    // UX / UI / FEEL
    {
        term: "UI (User Interface)",
        definition: "Toàn bộ phần giao diện người dùng như nút bấm, icon, thanh máu, bản đồ nhỏ, inventory."
    },
    {
        term: "UX (User Experience)",
        definition: "Trải nghiệm tổng thể khi người chơi tương tác với game, bao gồm mức dễ hiểu, dễ dùng, mượt, rõ ràng và ít gây bực."
    },
    {
        term: "Onboarding",
        definition: "Quá trình đưa người chơi mới vào game sao cho họ hiểu phải làm gì, tại sao phải làm và có động lực ở lại."
    },
    {
        term: "FTUE (First Time User Experience)",
        definition: "Trải nghiệm đầu tiên của người chơi mới. Đây là đoạn cực quan trọng vì hỏng ở đây là mất người chơi từ đầu."
    },
    {
        term: "Game Feel",
        definition: "Cảm giác điều khiển và phản hồi khi chơi, ví dụ di chuyển sướng tay, đánh trúng đã, nhảy chắc, bắn có lực."
    },
    {
        term: "Juice",
        definition: "Lớp hiệu ứng phụ như rung màn hình, hit flash, âm thanh, tween, particles giúp hành động có cảm giác mạnh và sống hơn."
    },
    {
        term: "Feedback",
        definition: "Phản hồi mà game đưa ra để người chơi hiểu chuyện gì vừa xảy ra, ví dụ âm thanh trúng đòn, số damage, rung, đổi màu."
    },
    {
        term: "Telegraphing",
        definition: "Cách game báo trước một hành động quan trọng, đặc biệt là đòn đánh nguy hiểm, để người chơi có thời gian đọc và phản ứng."
    },
    {
        term: "Readability",
        definition: "Mức độ dễ đọc tình huống của game, bao gồm kẻ địch, đường đạn, mục tiêu, hazard, vật thể tương tác. Game khó không sao, game khó đọc mới là tệ."
    },
    {
        term: "Affordance",
        definition: "Khả năng để người chơi nhìn vào một vật hoặc UI là đoán được nó dùng để làm gì. Một cái nút nhìn phải ra cái nút."
    },
    {
        term: "Signposting",
        definition: "Cách dẫn hướng người chơi bằng ánh sáng, màu sắc, bố cục, chuyển động, landmark hoặc framing thay vì nhét chữ hướng dẫn ngu ngốc."
    },
    {
        term: "Accessibility",
        definition: "Thiết kế giúp nhiều nhóm người chơi hơn có thể tiếp cận game, ví dụ chỉnh màu, remap nút, subtitle, hỗ trợ input."
    },
    {
        term: "Cognitive Load",
        definition: "Mức độ áp lực xử lý thông tin mà game đặt lên đầu người chơi tại một thời điểm. Quá tải thì người chơi loạn."
    },

    // COMBAT / ACTION DESIGN
    {
        term: "Hitbox",
        definition: "Vùng va chạm dùng để xác định khi nào một đòn đánh hoặc vật thể gây trúng mục tiêu."
    },
    {
        term: "Hurtbox",
        definition: "Vùng nhận sát thương của nhân vật hoặc đối tượng. Hitbox chạm hurtbox thì tính là trúng."
    },
    {
        term: "I-Frames (Invincibility Frames)",
        definition: "Khoảng thời gian ngắn nhân vật không nhận sát thương, thường xuất hiện khi lăn né, dash hoặc bị knockdown."
    },
    {
        term: "Crowd Control (CC)",
        definition: "Hiệu ứng kiểm soát như stun, slow, root, silence, knock-up làm hạn chế khả năng hành động của mục tiêu."
    },
    {
        term: "Time to Kill (TTK)",
        definition: "Thời gian trung bình cần để hạ một mục tiêu. TTK ảnh hưởng rất mạnh đến nhịp combat."
    },
    {
        term: "Frame Data",
        definition: "Thông tin chi tiết về số frame của animation hoặc hành động như startup, active, recovery. Rất quan trọng trong game đối kháng."
    },
    {
        term: "Animation Cancel",
        definition: "Kỹ thuật cho phép cắt sớm animation để chuyển sang hành động khác, thường dùng để tăng chiều sâu combat."
    },

    // LEVEL / CONTENT
    {
        term: "Pacing",
        definition: "Nhịp độ luân phiên giữa căng thẳng, nghỉ ngơi, khám phá, chiến đấu, cutscene hoặc giải đố. Pacing tốt giữ người chơi không bị mệt hoặc chán."
    },
    {
        term: "Encounter Design",
        definition: "Thiết kế từng tình huống đối đầu cụ thể giữa người chơi và thử thách, bao gồm địch, địa hình, tài nguyên và không gian."
    },
    {
        term: "Checkpoint",
        definition: "Điểm lưu tiến trình tạm thời để người chơi hồi lại sau khi chết thay vì chơi lại quá xa."
    },
    {
        term: "Spawn Point",
        definition: "Vị trí mà người chơi, NPC, quái hoặc item xuất hiện trong game."
    },
    {
        term: "Greybox / Blockout",
        definition: "Bản dựng thô của màn chơi bằng hình khối đơn giản để test flow, combat, khoảng cách và bố cục trước khi lên art."
    },
    {
        term: "Traversal",
        definition: "Cách người chơi di chuyển xuyên qua không gian game như leo trèo, bám dây, dash, trượt, cưỡi thú, parkour."
    },
    {
        term: "Environmental Storytelling",
        definition: "Kể chuyện thông qua môi trường, đạo cụ, ánh sáng, xác chết, dấu vết, bố cục thay vì nhồi dialogue."
    },

    // ECONOMY / MONETIZATION / LIVE OPS
    {
        term: "Game Economy",
        definition: "Hệ thống tạo, lưu thông và tiêu hao tài nguyên trong game như vàng, gem, energy, item, material."
    },
    {
        term: "Soft Currency",
        definition: "Loại tiền dễ kiếm trong game qua quá trình chơi bình thường, ví dụ vàng, coin, credits."
    },
    {
        term: "Hard Currency",
        definition: "Loại tiền hiếm hoặc thường liên quan trực tiếp đến nạp tiền, ví dụ gems, crystals, premium tokens."
    },
    {
        term: "Monetization",
        definition: "Cách game tạo doanh thu, ví dụ premium box price, battle pass, IAP, cosmetic shop, ads."
    },
    {
        term: "IAP (In-App Purchase)",
        definition: "Mua hàng trong ứng dụng, thường là skin, tiền premium, pack ưu đãi, vé sự kiện hoặc battle pass."
    },
    {
        term: "Battle Pass",
        definition: "Hệ thống phần thưởng theo tiến trình mùa giải, người chơi hoàn thành nhiệm vụ để lên cấp và nhận quà."
    },
    {
        term: "Gacha",
        definition: "Cơ chế quay ngẫu nhiên để nhận nhân vật, vũ khí hoặc vật phẩm. Bản chất là RNG được gói lại thành monetization loop."
    },
    {
        term: "Pity System",
        definition: "Cơ chế đảm bảo sau một số lượt quay nhất định người chơi sẽ nhận được phần thưởng hiếm, nhằm giảm cảm giác quá đen."
    },
    {
        term: "Retention",
        definition: "Khả năng giữ người chơi quay lại game sau ngày 1, ngày 7, ngày 30. Game sống được hay không phụ thuộc rất mạnh vào retention."
    },
    {
        term: "Engagement",
        definition: "Mức độ người chơi tương tác sâu với game, ví dụ chơi lâu, quay lại thường xuyên, tham gia event, thử nhiều mode."
    },
    {
        term: "ARPDAU",
        definition: "Average Revenue Per Daily Active User, doanh thu trung bình trên mỗi người dùng hoạt động mỗi ngày."
    },
    {
        term: "DAU / MAU",
        definition: "DAU là số người dùng hoạt động hằng ngày, MAU là số người dùng hoạt động hằng tháng. Đây là chỉ số nền cho live game."
    },
    {
        term: "Live Ops",
        definition: "Vận hành game sau phát hành bằng event, update, banner, event shop, season, re-engagement campaign."
    },
    {
        term: "Sink vs Source Balance",
        definition: "Cân bằng giữa nơi phát tài nguyên và nơi tiêu tài nguyên. Lệch bên nào thì economy cũng nát."
    },

    // ANALYTICS / PRODUCT
    {
        term: "KPI (Key Performance Indicator)",
        definition: "Chỉ số cốt lõi dùng để đo hiệu quả thiết kế hoặc kinh doanh, ví dụ retention, conversion, session length."
    },
    {
        term: "Conversion Rate",
        definition: "Tỉ lệ người chơi thực hiện hành động mong muốn, ví dụ từ chơi miễn phí sang nạp tiền hoặc từ xem popup sang mua."
    },
    {
        term: "Funnel",
        definition: "Chuỗi bước người chơi đi qua trong một flow cụ thể, ví dụ tutorial → trận đầu → mở shop → mua gói đầu."
    },
    {
        term: "Churn",
        definition: "Hiện tượng người chơi rời bỏ game và không quay lại nữa."
    },
    {
        term: "A/B Testing",
        definition: "So sánh hai phiên bản thiết kế khác nhau trên nhóm người dùng khác nhau để xem phương án nào cho kết quả tốt hơn."
    },
    {
        term: "Session Length",
        definition: "Độ dài trung bình một lần chơi. Chỉ số này cần hợp với thể loại và mục tiêu sản phẩm."
    },

    // NARRATIVE / WORLD / PLAYER EXPERIENCE
    {
        term: "Narrative Design",
        definition: "Thiết kế cách câu chuyện được kể thông qua gameplay, hệ thống, level, dialogue, quest và bối cảnh."
    },
    {
        term: "Worldbuilding",
        definition: "Xây dựng bối cảnh, quy luật, lịch sử, văn hóa, phe phái và logic vận hành của thế giới game."
    },
    {
        term: "Fantasy",
        definition: "Lời hứa cảm xúc cốt lõi mà game cho người chơi sống trong đó, ví dụ làm sát thủ, chỉ huy quân đội, bartender đọc cảm xúc."
    },
    {
        term: "Immersion",
        definition: "Mức độ người chơi bị cuốn vào trải nghiệm và quên mất thế giới thật xung quanh."
    },
    {
        term: "Replayability",
        definition: "Khả năng khiến người chơi muốn chơi lại nhờ build khác, kết cục khác, RNG, challenge hoặc mastery."
    },
    {
        term: "Replay Loop",
        definition: "Động lực cụ thể khiến người chơi bắt đầu lại một run hoặc một trận mới ngay sau khi kết thúc."
    },

    // GENERAL DESIGN TERMS
    {
        term: "Prototype",
        definition: "Bản thử nhanh để kiểm tra ý tưởng cốt lõi trước khi đầu tư art, content hoặc code sạch. Prototype là để test sự thật, không phải để đẹp."
    },
    {
        term: "Vertical Slice",
        definition: "Một phần nhỏ nhưng chất lượng gần hoàn thiện của game, thể hiện rõ hướng hình ảnh, cảm giác chơi và giá trị sản phẩm."
    },
    {
        term: "Feature Creep",
        definition: "Việc dự án phình ra liên tục vì thêm tính năng không kiểm soát. Đây là cách nhanh nhất để tự giết game indie."
    },
    {
        term: "Scope",
        definition: "Phạm vi nội dung và công việc của dự án. Scope ngu thì team chết trước khi game xong."
    },
    {
        term: "MVP (Minimum Viable Product)",
        definition: "Phiên bản tối thiểu nhưng vẫn đủ chơi và đủ chứng minh giá trị cốt lõi của game."
    },
    {
        term: "Juxtaposition",
        definition: "Đặt hai yếu tố trái ngược cạnh nhau để tạo ấn tượng mạnh, ví dụ hình ảnh dễ thương nhưng gameplay tàn nhẫn."
    },
    {
        term: "Benchmark",
        definition: "Sản phẩm tham chiếu dùng để so sánh, học hỏi hoặc xác định tiêu chuẩn cho feature, UX, combat hoặc market positioning."
    },
    {
    term: "Session Length",
    definition: "Thời lượng trung bình của một phiên chơi. Chỉ số này giúp đánh giá mức độ cuốn của gameplay và nhịp chơi có hợp lý hay không."
},
{
    term: "Session Frequency",
    definition: "Tần suất người chơi quay lại game trong một khoảng thời gian nhất định, ví dụ mỗi ngày 2 lần hoặc mỗi tuần 4 lần."
},
{
    term: "Stickiness",
    definition: "Mức độ gắn bó của người chơi với game, thường được nhìn qua tỉ lệ DAU/MAU để xem người chơi có quay lại thường xuyên hay không."
},
{
    term: "Whale",
    definition: "Nhóm người chơi chi rất nhiều tiền trong game, thường đóng góp phần lớn doanh thu trong mô hình free-to-play."
},
{
    term: "Dolphin",
    definition: "Nhóm người chơi có chi tiêu ở mức trung bình, không quá ít nhưng cũng không phải nhóm nạp mạnh nhất."
},
{
    term: "Minnow",
    definition: "Nhóm người chơi chi rất ít tiền hoặc chỉ mua những gói nhỏ, giá rẻ trong game."
},
{
    term: "Conversion Funnel",
    definition: "Chuỗi bước người chơi đi qua trước khi hoàn thành một hành động quan trọng như đăng ký, vượt tutorial, hoặc nạp tiền."
},
{
    term: "Drop-off Point",
    definition: "Điểm trong trải nghiệm nơi nhiều người chơi rời bỏ game hoặc ngừng tiếp tục một flow cụ thể."
},
{
    term: "Day 1 Retention",
    definition: "Tỉ lệ người chơi quay lại game vào ngày hôm sau sau lần cài đặt hoặc chơi đầu tiên."
},
{
    term: "Day 7 Retention",
    definition: "Tỉ lệ người chơi quay lại game sau 7 ngày. Đây là chỉ số cho thấy game có giữ được hứng thú ban đầu hay không."
},
{
    term: "Day 30 Retention",
    definition: "Tỉ lệ người chơi còn quay lại game sau 30 ngày, thường phản ánh sức khỏe dài hạn của sản phẩm."
},
{
    term: "LTV (Lifetime Value)",
    definition: "Tổng giá trị doanh thu trung bình mà một người chơi tạo ra trong toàn bộ vòng đời họ gắn bó với game."
},
{
    term: "ARPPU",
    definition: "Average Revenue Per Paying User, doanh thu trung bình trên mỗi người chơi có trả tiền."
},
{
    term: "CPI (Cost Per Install)",
    definition: "Chi phí trung bình để có được một lượt cài đặt game thông qua quảng cáo hoặc chiến dịch marketing."
},
{
    term: "UA (User Acquisition)",
    definition: "Hoạt động thu hút người chơi mới đến với game thông qua quảng cáo, cộng đồng, cửa hàng ứng dụng hoặc chiến dịch truyền thông."
},
{
    term: "Segmentation",
    definition: "Phân nhóm người chơi dựa trên hành vi, mức chi tiêu, tiến trình hoặc mức độ hoạt động để tối ưu thiết kế và vận hành."
},
{
    term: "Churn Rate",
    definition: "Tỉ lệ người chơi rời bỏ game trong một giai đoạn nhất định. Churn cao là dấu hiệu sản phẩm có vấn đề."
},
{
    term: "Re-engagement",
    definition: "Hoạt động kéo người chơi cũ quay trở lại game thông qua event, quà tặng, thông báo hoặc nội dung mới."
},
{
    term: "FTUE Funnel",
    definition: "Chuỗi các bước người chơi đi qua trong trải nghiệm đầu tiên, dùng để đo họ bị rơi ở đâu trong tutorial hoặc onboarding."
},
{
    term: "Tutorialization",
    definition: "Quá trình biến việc hướng dẫn người chơi thành một phần tự nhiên của trải nghiệm thay vì nhồi chữ hoặc bắt đọc quá nhiều."
},
{
    term: "Teach-Test-Twist",
    definition: "Nguyên tắc thiết kế level hoặc mechanic: dạy người chơi cách hoạt động, kiểm tra khả năng áp dụng, rồi biến tấu để tăng độ khó."
},
{
    term: "Breadcrumbing",
    definition: "Cách dẫn dắt người chơi từng bước bằng tín hiệu nhỏ trong môi trường, phần thưởng hoặc bố cục thay vì chỉ đường quá lộ."
},
{
    term: "Flow State",
    definition: "Trạng thái người chơi tập trung cao độ và bị cuốn hoàn toàn vào trải nghiệm vì độ khó và kỹ năng đang cân bằng tốt."
},
{
    term: "Player Motivation",
    definition: "Lý do khiến người chơi tiếp tục chơi game, ví dụ muốn mạnh hơn, khám phá cốt truyện, cạnh tranh, sưu tầm hoặc thư giãn."
},
{
    term: "Intrinsic Motivation",
    definition: "Động lực đến từ chính niềm vui hoặc sự thỏa mãn của hoạt động chơi, không phụ thuộc hoàn toàn vào phần thưởng bên ngoài."
},
{
    term: "Extrinsic Motivation",
    definition: "Động lực đến từ phần thưởng bên ngoài như vàng, skin, rank, achievement hoặc quà đăng nhập."
},
{
    term: "Compulsion Loop",
    definition: "Vòng lặp khiến người chơi liên tục muốn quay lại thực hiện hành động để nhận thưởng và tiếp tục lặp lại."
},
{
    term: "Reward Schedule",
    definition: "Cách sắp xếp thời điểm và tần suất phần thưởng được trao cho người chơi để duy trì hứng thú và hành vi mong muốn."
},
{
    term: "Variable Reward",
    definition: "Phần thưởng biến thiên, không cố định mỗi lần nhận giống nhau, thường tạo cảm giác bất ngờ và gây nghiện mạnh hơn."
},
{
    term: "Daily Login Reward",
    definition: "Phần thưởng nhận được khi đăng nhập mỗi ngày nhằm tăng retention và tạo thói quen quay lại."
},
{
    term: "Quest Loop",
    definition: "Chuỗi nhận nhiệm vụ, thực hiện, hoàn thành và nhận thưởng, thường là một loop phụ hỗ trợ loop chính."
},
{
    term: "Mission Design",
    definition: "Thiết kế mục tiêu, điều kiện hoàn thành, nhịp độ và phần thưởng của từng nhiệm vụ trong game."
},
{
    term: "Side Quest",
    definition: "Nhiệm vụ phụ ngoài tuyến chính, thường dùng để mở rộng thế giới, cho thêm phần thưởng hoặc kể chuyện bổ sung."
},
{
    term: "Main Quest",
    definition: "Chuỗi nhiệm vụ chính dẫn dắt tiến trình cốt truyện hoặc tiến trình cốt lõi của game."
},
{
    term: "Quest Gating",
    definition: "Cách khóa hoặc mở nhiệm vụ dựa trên điều kiện như cấp độ, item, tiến trình cốt truyện hoặc nhiệm vụ trước đó."
},
{
    term: "Progression Gate",
    definition: "Rào cản buộc người chơi phải đạt điều kiện nhất định mới được đi tiếp, ví dụ cần level cao hơn hoặc hoàn thành một mục tiêu phụ."
},
{
    term: "Soft Gate",
    definition: "Rào cản mềm không chặn hoàn toàn nhưng khiến người chơi thấy nên quay lại sau, ví dụ khu vực quá khó so với hiện tại."
},
{
    term: "Hard Gate",
    definition: "Rào cản cứng chặn tuyệt đối tiến trình cho tới khi người chơi đạt điều kiện cần thiết."
},
{
    term: "Power Spike",
    definition: "Thời điểm sức mạnh của người chơi hoặc kẻ địch tăng vọt do mở khóa skill, item, combo hoặc mốc tiến trình."
},
{
    term: "Snowballing",
    definition: "Hiện tượng bên đang có lợi thế càng lúc càng mạnh hơn, khiến khoảng cách ngày càng khó lật ngược."
},
{
    term: "Catch-up Mechanic",
    definition: "Cơ chế giúp người chơi đang thua có cơ hội bắt kịp, nhằm giữ trận đấu hoặc trải nghiệm không bị một chiều."
},
{
    term: "Rubber Banding",
    definition: "Cơ chế tự động kéo khoảng cách giữa người dẫn trước và người phía sau lại gần nhau, thường thấy trong game đua xe."
},
{
    term: "Dominant Strategy",
    definition: "Chiến thuật quá hiệu quả so với các lựa chọn khác, làm giảm sự đa dạng quyết định của người chơi."
},
{
    term: "Build Diversity",
    definition: "Mức độ mà game cho phép nhiều cách xây dựng nhân vật hoặc chiến thuật khác nhau mà vẫn hiệu quả."
},
{
    term: "Synergy",
    definition: "Sự kết hợp giữa nhiều yếu tố tạo ra hiệu quả mạnh hơn tổng từng phần riêng lẻ."
},
{
    term: "Counterplay",
    definition: "Khả năng mà game cho phép người chơi phản ứng, né tránh, khắc chế hoặc trừng phạt một chiến thuật mạnh."
},
{
    term: "Decision Space",
    definition: "Không gian lựa chọn có ý nghĩa mà người chơi có trong một tình huống hoặc xuyên suốt game."
},
{
    term: "Meaningful Choice",
    definition: "Lựa chọn có hậu quả, có đánh đổi, và tạo khác biệt thực sự thay vì chỉ là ảo giác lựa chọn."
},
{
    term: "Trade-off",
    definition: "Đánh đổi giữa hai hoặc nhiều lợi ích, buộc người chơi không thể có tất cả cùng lúc."
},
{
    term: "Verb Set",
    definition: "Tập hợp các hành động cơ bản mà người chơi có thể làm trong game như chạy, nhảy, bắn, né, nói chuyện, craft."
},
{
    term: "Game Pillars",
    definition: "Các trụ cột thiết kế cốt lõi định hướng toàn bộ dự án, dùng để kiểm tra xem feature có đúng hướng hay không."
},
{
    term: "Design Intent",
    definition: "Ý đồ thiết kế thực sự đằng sau một mechanic, system hoặc feature. Không rõ intent thì rất dễ làm feature vô hồn."
},
{
    term: "Player Fantasy",
    definition: "Cảm giác vai trò hoặc quyền lực mà người chơi được sống trong game, ví dụ làm thợ săn, phù thủy, chỉ huy hoặc kẻ sống sót."
},
{
    term: "State Machine",
    definition: "Mô hình chia hành vi hoặc flow thành các trạng thái rõ ràng và quy tắc chuyển đổi giữa chúng."
},
{
    term: "Combat Loop",
    definition: "Chuỗi hành động lặp trong giao tranh như tiếp cận, né, tấn công, hồi phục, tận dụng sơ hở, kết liễu."
},
{
    term: "Exploration Loop",
    definition: "Vòng lặp khám phá gồm tìm đường, phát hiện bí mật, thu thập, mở khóa và tiếp tục đi sâu hơn."
},
{
    term: "Social Loop",
    definition: "Vòng lặp dựa trên tương tác xã hội như kết bạn, gửi quà, guild, co-op, cạnh tranh bảng xếp hạng."
},
{
    term: "Economy Sink",
    definition: "Một dạng tiêu hao tài nguyên nhằm ngăn lạm phát và giữ nền kinh tế game ổn định về lâu dài."
},
{
    term: "Economy Inflation",
    definition: "Tình trạng tài nguyên trong game bị bơm ra quá nhiều khiến phần thưởng mất giá trị và progression trở nên nhạt."
},
{
    term: "Crafting System",
    definition: "Hệ thống cho phép người chơi kết hợp nguyên liệu để tạo ra vật phẩm, trang bị hoặc nâng cấp."
},
{
    term: "Loadout",
    definition: "Bộ trang bị, kỹ năng hoặc item mà người chơi mang vào trước một trận hoặc nhiệm vụ."
},
{
    term: "Inventory Management",
    definition: "Thiết kế việc chứa, sắp xếp, giới hạn và sử dụng vật phẩm trong túi đồ của người chơi."
},
{
    term: "Encumbrance",
    definition: "Cơ chế giới hạn trọng lượng hoặc số lượng đồ mang theo, buộc người chơi phải lựa chọn."
},
{
    term: "Loot Table",
    definition: "Bảng xác suất xác định vật phẩm nào có thể rơi ra từ quái, rương hoặc reward source."
},
{
    term: "Drop Rate",
    definition: "Tỉ lệ rơi của một vật phẩm cụ thể trong loot table."
},
{
    term: "Spawn Rate",
    definition: "Tần suất hoặc xác suất mà một đối tượng, quái hoặc tài nguyên xuất hiện trong game."
},
{
    term: "Aggro",
    definition: "Mức độ ưu tiên mà AI dành cho một mục tiêu, thường quyết định quái sẽ đuổi hoặc tấn công ai."
},
{
    term: "Boss Pattern",
    definition: "Chuỗi hành vi và đòn đánh lặp lại hoặc biến đổi của boss mà người chơi cần học để đối phó."
},
{
    term: "Phases",
    definition: "Các giai đoạn khác nhau trong một trận boss hoặc encounter, thường thay đổi hành vi, tốc độ hoặc bộ kỹ năng."
},
{
    term: "Mobility",
    definition: "Khả năng di chuyển linh hoạt của nhân vật như dash, double jump, blink, wall run hoặc grapple."
},
{
    term: "Kiting",
    definition: "Chiến thuật vừa giữ khoảng cách vừa gây sát thương để tránh bị áp sát hoặc phản công."
},
{
    term: "Burst Damage",
    definition: "Lượng sát thương dồn trong thời gian rất ngắn, thường dùng để kết liễu hoặc tạo đột biến."
},
{
    term: "Sustained Damage",
    definition: "Lượng sát thương duy trì ổn định theo thời gian dài thay vì bùng nổ trong chốc lát."
},
{
    term: "Glass Cannon",
    definition: "Kiểu build hoặc nhân vật gây sát thương rất cao nhưng rất mỏng và dễ chết."
},
{
    term: "Tank",
    definition: "Kiểu nhân vật có khả năng chịu đòn cao, thường dùng để hút sát thương hoặc che chắn cho đội."
},
{
    term: "Support",
    definition: "Vai trò tập trung vào hồi máu, buff, debuff hoặc tạo lợi thế chiến thuật cho đồng đội."
},
{
    term: "DPS",
    definition: "Damage Per Second, thường dùng để chỉ vai trò gây sát thương chính hoặc tốc độ gây sát thương của một build."
},
{
    term: "Aggro Radius",
    definition: "Phạm vi mà khi người chơi bước vào, AI sẽ phát hiện và bắt đầu phản ứng."
},
{
    term: "Line of Sight",
    definition: "Tầm nhìn trực tiếp giữa AI và mục tiêu, thường quyết định việc phát hiện, bắn hoặc đuổi theo."
},
{
    term: "Stealth System",
    definition: "Hệ thống cho phép người chơi ẩn nấp, né phát hiện và xử lý tình huống bằng lối chơi kín đáo."
},
{
    term: "Detection Meter",
    definition: "Thanh hoặc mức độ hiển thị việc kẻ địch đang nghi ngờ hay phát hiện người chơi đến đâu."
},
{
    term: "Safe Zone",
    definition: "Khu vực an toàn nơi người chơi không bị tấn công, thường dùng để nghỉ, mua đồ, nhận quest hoặc chuẩn bị."
},
{
    term: "Hub Area",
    definition: "Khu trung tâm kết nối nhiều hoạt động như chọn nhiệm vụ, nâng cấp, gặp NPC và đi sang các khu vực khác."
},
{
    term: "Traversal Challenge",
    definition: "Thử thách tập trung vào di chuyển chính xác, đọc địa hình và dùng công cụ mobility thay vì combat."
},
{
    term: "Set Piece",
    definition: "Phân đoạn được dàn dựng mạnh về hình ảnh và cảm xúc, thường rất đáng nhớ như rượt đuổi, sập cầu, boss intro."
},
{
    term: "Environmental Hazard",
    definition: "Mối nguy từ môi trường như lava, spike, bẫy điện, nền sập hoặc khí độc."
},
{
    term: "Puzzle Dependency",
    definition: "Mối liên kết giữa các thành phần puzzle khiến người chơi phải hiểu tương quan trước khi giải được toàn bộ."
},
{
    term: "Fail Forward",
    definition: "Thiết kế cho phép người chơi vẫn tiếp tục tiến trình dù thất bại, chỉ khác ở hậu quả hoặc phần thưởng thấp hơn."
},
{
    term: "Permadeath",
    definition: "Cơ chế chết là mất toàn bộ run hoặc tiến trình hiện tại, thường dùng để tăng tension trong roguelike."
},
{
    term: "Checkpoint Density",
    definition: "Mức độ dày hay thưa của checkpoint trong một khu vực, ảnh hưởng trực tiếp đến tension và frustration."
},
{
    term: "Save Scumming",
    definition: "Hành vi liên tục save/load để tránh hậu quả xấu hoặc tối ưu kết quả theo cách không đúng ý đồ thiết kế."
},
{
    term: "Telegraph Window",
    definition: "Khoảng thời gian từ lúc game báo hiệu đến lúc hành động nguy hiểm thực sự xảy ra."
},
{
    term: "Recovery Window",
    definition: "Khoảng hở sau một hành động, thường là lúc mục tiêu dễ bị trừng phạt hoặc lúc người chơi lấy lại kiểm soát."
},
{
    term: "Commitment",
    definition: "Mức độ mà khi đã thực hiện một hành động thì người chơi bị khóa vào đó và không dễ hủy ngang."
},
{
    term: "Responsiveness",
    definition: "Mức độ nhanh và chính xác mà game phản ứng lại input của người chơi. Thiếu cái này thì game feel chết."
},
{
    term: "Input Buffer",
    definition: "Cơ chế lưu input trong một khoảng thời gian ngắn để hành động tiếp theo vẫn được thực hiện mượt mà."
},
{
    term: "Hit Stop",
    definition: "Khoảng dừng cực ngắn khi đòn đánh trúng mục tiêu nhằm làm tăng cảm giác lực và độ đã tay."
},
{
    term: "Screen Shake",
    definition: "Hiệu ứng rung màn hình dùng để nhấn mạnh va chạm, nổ, hit mạnh hoặc sự kiện lớn."
},
{
    term: "Anticipation",
    definition: "Chuyển động chuẩn bị trước khi hành động chính diễn ra, giúp animation rõ, có lực và dễ đọc hơn."
},
{
    term: "Follow-through",
    definition: "Chuyển động quán tính sau hành động chính, giúp animation bớt cứng và có cảm giác tự nhiên hơn."
},
{
    term: "Silhouette",
    definition: "Hình khối tổng thể của nhân vật hoặc vật thể khi nhìn thành bóng đen, rất quan trọng cho readability."
},
{
    term: "Landmark",
    definition: "Điểm mốc thị giác nổi bật trong môi trường giúp người chơi định hướng và ghi nhớ không gian."
},
{
    term: "Negative Space",
    definition: "Khoảng trống có chủ ý trong bố cục giúp nhấn mạnh đối tượng chính và giảm rối mắt."
},
{
    term: "Visual Hierarchy",
    definition: "Thứ tự ưu tiên thị giác giúp người chơi biết nên nhìn gì trước, gì sau trong UI hoặc môi trường."
},
{
    term: "Diegesis",
    definition: "Mức độ một yếu tố thuộc về thế giới trong game hay nằm ngoài trải nghiệm của nhân vật."
},
{
    term: "Ludonarrative Dissonance",
    definition: "Sự lệch nhau giữa câu chuyện game nói và gameplay game cho phép làm, khiến trải nghiệm bị mâu thuẫn."
},
{
    term: "Branching Narrative",
    definition: "Cấu trúc kể chuyện có nhiều nhánh dựa trên lựa chọn hoặc hành động của người chơi."
},
{
    term: "Narrative Beat",
    definition: "Một nhịp nhỏ trong tiến trình kể chuyện, thường là khoảnh khắc thông tin, cảm xúc hoặc xung đột được đẩy lên."
},
{
    term: "Dialogue Tree",
    definition: "Cấu trúc hội thoại cho phép người chơi chọn nhiều câu trả lời khác nhau dẫn đến phản ứng khác nhau."
},
{
    term: "Bark",
    definition: "Câu thoại ngắn, thường lặp lại theo ngữ cảnh, được NPC hoặc nhân vật nói ra trong gameplay."
},
{
    term: "Lore",
    definition: "Hệ thống kiến thức nền, lịch sử, truyền thuyết và thông tin sâu về thế giới game."
},
{
    term: "Codex",
    definition: "Kho lưu trữ thông tin trong game về nhân vật, địa danh, sinh vật, sự kiện hoặc lore."
},
{
    term: "Faction",
    definition: "Nhóm, phe hoặc tổ chức trong thế giới game có mục tiêu, bản sắc và quan hệ riêng."
},
{
    term: "Archetype",
    definition: "Kiểu mẫu vai trò hoặc tính cách quen thuộc dùng để xây dựng nhân vật, class hoặc đối tượng gameplay."
},
{
    term: "Asymmetrical Design",
    definition: "Thiết kế mà các bên chơi có luật, công cụ hoặc mục tiêu khác nhau thay vì hoàn toàn giống nhau."
},
{
    term: "Symmetrical Design",
    definition: "Thiết kế mà các bên bắt đầu với điều kiện và khả năng tương đương nhau để nhấn mạnh kỹ năng thực thi."
},
{
    term: "Matchmaking",
    definition: "Hệ thống ghép người chơi với nhau trong multiplayer dựa trên kỹ năng, rank, ping hoặc tiêu chí khác."
},
{
    term: "MMR (Matchmaking Rating)",
    definition: "Chỉ số ẩn hoặc hiện dùng để ước tính trình độ người chơi và ghép trận phù hợp."
},
{
    term: "Elo System",
    definition: "Hệ thống tính điểm xếp hạng dựa trên thắng thua trước đối thủ có trình độ khác nhau."
},
{
    term: "Griefing",
    definition: "Hành vi cố tình phá trải nghiệm của người khác trong multiplayer như troll, feed hoặc cản đồng đội."
},
{
    term: "Toxicity",
    definition: "Hành vi giao tiếp hoặc ứng xử tiêu cực làm hại môi trường cộng đồng trong game."
},
{
    term: "Guild System",
    definition: "Hệ thống bang hội cho phép người chơi tạo nhóm lâu dài, giao tiếp, hỗ trợ và cùng tham gia nội dung."
},
{
    term: "Leaderboard",
    definition: "Bảng xếp hạng người chơi theo điểm, thời gian, rank hoặc thành tích."
},
{
    term: "Seasonality",
    definition: "Chu kỳ nội dung theo mùa giải hoặc đợt sự kiện nhằm làm mới trải nghiệm và kéo người chơi quay lại."
},
{
    term: "Limited-Time Event",
    definition: "Sự kiện chỉ tồn tại trong thời gian ngắn để tạo cảm giác khẩn trương và tăng engagement."
},
{
    term: "FOMO",
    definition: "Fear of Missing Out, tâm lý sợ bỏ lỡ phần thưởng hoặc cơ hội giới hạn thời gian."
},
{
    term: "Event Cadence",
    definition: "Nhịp độ và tần suất ra event trong live ops. Dày quá thì người chơi mệt, thưa quá thì game chết không khí."
},
{
    term: "Content Cadence",
    definition: "Tốc độ phát hành nội dung mới như màn chơi, nhân vật, chế độ hoặc season."
},
{
    term: "Roadmap",
    definition: "Kế hoạch định hướng các mốc nội dung, tính năng hoặc cập nhật trong tương lai của dự án."
},
{
    term: "Patch Notes",
    definition: "Danh sách thay đổi của một bản cập nhật, thường bao gồm fix lỗi, chỉnh balance và nội dung mới."
},
{
    term: "Meta Shift",
    definition: "Sự thay đổi trong chiến thuật tối ưu của cộng đồng sau patch, balance change hoặc nội dung mới."
},
{
    term: "Power Creep",
    definition: "Hiện tượng nội dung mới ngày càng mạnh hơn nội dung cũ, làm mất giá trị của những gì đã có trước đó."
},
{
    term: "Feature Parity",
    definition: "Trạng thái các nền tảng hoặc phiên bản có mức độ tính năng tương đương nhau."
},
{
    term: "Platform Holder",
    definition: "Đơn vị sở hữu nền tảng phát hành như Steam, PlayStation, Xbox, Nintendo, Apple hoặc Google."
},
{
    term: "Certification",
    definition: "Quy trình kiểm duyệt kỹ thuật hoặc tiêu chuẩn cần vượt qua để game được phát hành trên một nền tảng."
},
{
    term: "Submission Build",
    definition: "Bản build được chuẩn bị để gửi cho nhà phát hành, cửa hàng hoặc nền tảng kiểm duyệt."
},
{
    term: "Vertical Progression",
    definition: "Tiến trình kiểu tăng sức mạnh trực tiếp như level cao hơn, gear mạnh hơn, stat lớn hơn."
},
{
    term: "Horizontal Progression",
    definition: "Tiến trình kiểu mở thêm lựa chọn mới mà không nhất thiết mạnh hơn tuyệt đối, ví dụ weapon style hoặc playstyle mới."
},
{
    term: "Mastery",
    definition: "Quá trình người chơi dần hiểu sâu và thực thi ngày càng tốt một hệ thống hoặc kỹ năng."
},
{
    term: "Skill Expression",
    definition: "Mức độ mà game cho phép người chơi thể hiện trình độ qua quyết định, timing, execution và sáng tạo."
},
{
    term: "Ceiling Breaker",
    definition: "Một yếu tố mở ra tầng kỹ năng cao hơn rõ rệt, thường xuất hiện khi người chơi học được tech hoặc combo nâng cao."
},
{
    term: "Replay Value",
    definition: "Giá trị khiến game đáng được chơi lại nhiều lần, thường đến từ lựa chọn khác nhau, random, challenge hoặc content ẩn."
},
{
    term: "Completionism",
    definition: "Xu hướng người chơi muốn hoàn thành 100% nội dung, achievement, collectable hoặc secret."
},
{
    term: "Collectathon",
    definition: "Phong cách thiết kế đặt trọng tâm vào thu thập nhiều vật phẩm, token hoặc objective rải khắp màn chơi."
},
{
    term: "Microdecision",
    definition: "Quyết định nhỏ nhưng lặp liên tục trong gameplay, ví dụ né hướng nào, dùng skill nào trước, giữ item hay xài."
},
{
    term: "Macrodecision",
    definition: "Quyết định lớn ảnh hưởng dài hạn như build nào, route nào, đầu tư tài nguyên vào đâu."
},
{
    term: "Playtest",
    definition: "Quá trình cho người khác chơi thử để quan sát hành vi thật thay vì chỉ nghe họ nói."
},
{
    term: "Usability Testing",
    definition: "Kiểm tra mức độ dễ hiểu và dễ dùng của UI, flow hoặc hệ thống bằng người dùng thật."
},
{
    term: "Telemetry",
    definition: "Dữ liệu hành vi được game ghi lại để phân tích cách người chơi thực sự chơi, rơi ở đâu, kẹt ở đâu."
},
{
    term: "Heatmap",
    definition: "Bản đồ dữ liệu trực quan cho thấy nơi người chơi chết nhiều, đi nhiều, click nhiều hoặc tương tác nhiều."
},
{
    term: "Instrumentation",
    definition: "Quá trình cài các điểm đo dữ liệu vào game để theo dõi hành vi người chơi một cách có cấu trúc."
},
{
    term: "Hypothesis",
    definition: "Giả thuyết thiết kế cần được kiểm chứng bằng playtest hoặc dữ liệu thay vì cảm tính."
},
{
    term: "Tuning",
    definition: "Quá trình chỉnh các con số và tham số nhỏ để cải thiện trải nghiệm mà không đổi bản chất hệ thống."
},
{
    term: "Parameter",
    definition: "Biến số dùng để điều chỉnh hành vi của mechanic hoặc system như tốc độ, damage, cooldown, spawn rate."
},
{
    term: "Data-Driven Design",
    definition: "Cách xây dựng hệ thống sao cho nội dung và tham số được điều khiển bằng data thay vì hard-code quá nhiều."
},
{
    term: "Content Pipeline",
    definition: "Quy trình tạo, kiểm duyệt, tích hợp và cập nhật nội dung vào game một cách ổn định."
},
{
    term: "Scalability",
    definition: "Khả năng một hệ thống hoặc pipeline mở rộng lên nhiều nội dung hơn mà không vỡ cấu trúc."
},
{
    term: "Modularity",
    definition: "Mức độ một hệ thống được chia thành phần nhỏ, dễ tái sử dụng, dễ thay và dễ mở rộng."
},
{
    term: "Reusability",
    definition: "Khả năng một mechanic, asset hoặc system được tái dùng ở nhiều ngữ cảnh khác nhau."
},
{
    term: "Design Debt",
    definition: "Hệ quả tích tụ từ các quyết định thiết kế tạm bợ hoặc thiếu nhất quán, khiến sau này sửa rất đau."
},
{
    term: "Content Bloat",
    definition: "Tình trạng game có quá nhiều nội dung nhưng thiếu chất lượng, thiếu rõ ràng hoặc làm người chơi ngợp."
},
{
    term: "Clarity",
    definition: "Mức độ rõ ràng của thông tin, luật chơi, mục tiêu và phản hồi mà game truyền cho người chơi."
},
{
    term: "Frustration Point",
    definition: "Điểm trong trải nghiệm gây bực quá mức khiến người chơi muốn bỏ cuộc thay vì muốn cố thêm."
},
{
    term: "Delight",
    definition: "Khoảnh khắc tạo niềm vui vượt mong đợi cho người chơi, thường đến từ polish, bất ngờ hoặc phản hồi tinh tế."
},
{
    term: "Magic Circle",
    definition: "Không gian tâm lý nơi người chơi chấp nhận luật lệ và ý nghĩa riêng của trò chơi trong lúc đang chơi."
},
{
    term: "Ludic Goal",
    definition: "Mục tiêu thuần gameplay mà người chơi theo đuổi trong hệ thống luật chơi."
},
{
    term: "Aesthetic Experience",
    definition: "Trải nghiệm cảm xúc mà game tạo ra thông qua hình ảnh, âm thanh, nhịp độ, tương tác và bối cảnh."
},
{
    term: "Verb Economy",
    definition: "Mức độ tinh gọn và hiệu quả của tập hành động người chơi có thể làm. Nhiều verb chưa chắc tốt, quan trọng là có giá trị."
},
{
    term: "Systemic Design",
    definition: "Thiết kế dựa trên các luật và tương tác hệ thống để nội dung tự sinh chiều sâu thay vì phụ thuộc script cứng."
},
{
    term: "Authored Content",
    definition: "Nội dung được thiết kế thủ công với mục tiêu cảm xúc, pacing hoặc câu chuyện rất cụ thể."
},
{
    term: "Replayable Content",
    definition: "Nội dung được làm ra để chơi đi chơi lại mà vẫn còn giá trị, thường nhờ random, mastery hoặc biến số hệ thống."
},
{
    term: "Fail State Clarity",
    definition: "Mức độ rõ ràng để người chơi hiểu vì sao mình thua và cần làm gì khác ở lần sau."
},
{
    term: "Win Feedback",
    definition: "Cách game ăn mừng chiến thắng để người chơi cảm thấy công sức của họ được đền đáp xứng đáng."
},
{
    term: "Loss Aversion",
    definition: "Xu hướng người chơi sợ mất thứ đang có hơn là thích nhận thêm thứ mới, thường ảnh hưởng mạnh tới economy và tension."
},
{
    term: "Endgame",
    definition: "Phần nội dung dành cho người chơi sau khi đã hoàn thành tiến trình chính, thường tập trung vào mastery, optimization hoặc challenge cao."
},
{
    term: "Prestige System",
    definition: "Cơ chế reset một phần tiến trình để đổi lấy lợi ích lâu dài, danh hiệu hoặc trạng thái cao hơn."
},
{
    term: "New Game Plus",
    definition: "Chế độ chơi lại sau khi hoàn thành game, thường giữ lại một phần tiến trình nhưng tăng thử thách hoặc mở thêm nội dung."
},
{
    term: "Achievement Design",
    definition: "Thiết kế thành tựu sao cho vừa khuyến khích khám phá, mastery, replay vừa không biến thành checklist vô nghĩa."
},
{
    term: "Completion Reward",
    definition: "Phần thưởng cho việc hoàn thành một mục tiêu lớn như full map, full collection, hết campaign hoặc toàn bộ challenge."
},
{
    term: "Core Fantasy",
    definition: "Lời hứa trải nghiệm cốt lõi mà game bán cho người chơi ở tầng cảm xúc và vai trò, ví dụ cảm giác làm sát thủ, sinh tồn tuyệt vọng, hoặc thống trị chiến trường. Nếu mechanic không phục vụ fantasy này thì đó là rác."
},
{
    term: "Pillars",
    definition: "Các trụ cột thiết kế bất khả xâm phạm dùng để kiểm tra mọi feature, content và quyết định sản phẩm. Pillars tốt giúp team biết nên làm gì và quan trọng hơn là bỏ gì."
},
{
    term: "North Star",
    definition: "Mục tiêu trải nghiệm tối thượng mà toàn bộ game phải hướng tới. Nó không phải slogan đẹp, mà là tiêu chuẩn sống còn để ra quyết định."
},
{
    term: "Experience Goal",
    definition: "Trạng thái cảm xúc hoặc hành vi cụ thể mà designer muốn người chơi trải qua ở một đoạn, một mode hoặc toàn bộ game."
},
{
    term: "Design Constraints",
    definition: "Các giới hạn có chủ đích về thời gian, input, camera, content, scope hoặc công nghệ để buộc thiết kế tập trung và sắc hơn."
},
{
    term: "Possibility Space",
    definition: "Tổng không gian hành động, hệ quả và trạng thái mà game cho phép tồn tại. Game càng sâu thì possibility space càng giàu nhưng vẫn phải đọc được."
},
{
    term: "State Space",
    definition: "Tập hợp tất cả trạng thái có thể có của hệ thống trong game, bao gồm người chơi, AI, tài nguyên, môi trường và điều kiện thắng thua."
},
{
    term: "Decision Density",
    definition: "Mật độ các quyết định có ý nghĩa trên mỗi đơn vị thời gian. Cao quá thì loạn, thấp quá thì nhạt."
},
{
    term: "Decision Latency",
    definition: "Khoảng thời gian từ lúc người chơi nhận thông tin đến lúc phải ra quyết định. Latency ngắn tạo áp lực, latency dài tạo chiến thuật."
},
{
    term: "Execution Burden",
    definition: "Mức độ khó trong việc biến một quyết định đúng thành hành động thành công. Chiến thuật hay mà execution quá nặng có thể giết trải nghiệm."
},
{
    term: "Cognitive Bandwidth",
    definition: "Lượng chú ý và xử lý thông tin mà người chơi còn dư để tiếp nhận hệ thống mới, đọc combat hoặc lên kế hoạch."
},
{
    term: "Mental Model",
    definition: "Cách người chơi tự hình dung luật chơi và quan hệ nhân quả trong đầu. Game giỏi là game xây được mental model rõ và ít phản bội nó."
},
{
    term: "Expectation Setting",
    definition: "Quá trình game dạy người chơi nên kỳ vọng điều gì về độ khó, nhịp, reward, punishment và logic hệ thống."
},
{
    term: "Expectation Violation",
    definition: "Khi game cố tình phá kỳ vọng của người chơi để tạo bất ngờ, sợ hãi hoặc chiều sâu. Làm ngu thì thành khó chịu, làm đúng thì thành đỉnh."
},
{
    term: "Rule Signaling",
    definition: "Cách game báo cho người chơi biết luật gì đang áp dụng thông qua hình ảnh, âm thanh, bố cục, animation hoặc phản hồi hệ thống."
},
{
    term: "System Legibility",
    definition: "Mức độ mà người chơi có thể đọc, hiểu và dự đoán được logic của một hệ thống phức tạp."
},
{
    term: "Local Maximum",
    definition: "Trạng thái người chơi tìm được một chiến thuật hiệu quả trước mắt nên dừng khám phá thêm, dù vẫn còn chiến thuật mạnh hơn."
},
{
    term: "Mastery Trap",
    definition: "Tình huống người chơi nghĩ mình đã hiểu game nhưng thật ra mới chỉ bám vào một lớp nông, khiến trải nghiệm sớm bị nhàm."
},
{
    term: "False Choice",
    definition: "Lựa chọn nhìn có vẻ đa dạng nhưng kết quả gần như giống nhau hoặc có một đáp án rõ ràng vượt trội."
},
{
    term: "Illusion of Choice",
    definition: "Thiết kế tạo cảm giác người chơi đang kiểm soát hoặc chọn đường đi riêng dù hệ thống thực tế khá tuyến tính."
},
{
    term: "Decision Cost",
    definition: "Cái giá mà người chơi phải trả khi ra quyết định, có thể là tài nguyên, thời gian, rủi ro hoặc cơ hội bị mất."
},
{
    term: "Opportunity Cost",
    definition: "Giá trị của lựa chọn tốt nhất bị bỏ qua khi người chơi chọn một phương án khác."
},
{
    term: "Path Dependency",
    definition: "Việc lựa chọn sớm ảnh hưởng mạnh đến những lựa chọn hoặc kết quả có thể xảy ra về sau."
},
{
    term: "Strategic Depth",
    definition: "Chiều sâu chiến thuật đến từ nhiều lớp quyết định, phản quyết định, đọc tình huống và tối ưu dài hạn."
},
{
    term: "Tactical Depth",
    definition: "Chiều sâu ở cấp tình huống ngắn hạn, nơi người chơi phải phản ứng đúng với dữ kiện trước mắt."
},
{
    term: "Emergent Complexity",
    definition: "Độ phức tạp phát sinh từ tương tác giữa các luật đơn giản, không phải từ việc nhét thêm hàng đống cơ chế rời rạc."
},
{
    term: "Combinatorial Depth",
    definition: "Chiều sâu đến từ số lượng cách kết hợp meaningful giữa kỹ năng, item, unit, trạng thái hoặc địa hình."
},
{
    term: "Systemic Synergy",
    definition: "Sự cộng hưởng giữa nhiều hệ thống lớn khiến hành vi ở một hệ thống tạo hậu quả đáng kể lên hệ thống khác."
},
{
    term: "Systemic Friction",
    definition: "Ma sát có chủ đích giữa các hệ thống để ép người chơi phải đánh đổi thay vì tối ưu mọi thứ cùng lúc."
},
{
    term: "Counter-System",
    definition: "Một hệ hoặc lớp luật được thiết kế để kìm hãm, đối trọng hoặc kiểm soát sức mạnh của một hệ khác."
},
{
    term: "Closed Economy",
    definition: "Nền kinh tế mà phần lớn tài nguyên lưu thông trong vòng khép kín, có nguồn vào và nguồn ra được kiểm soát chặt."
},
{
    term: "Open Economy",
    definition: "Nền kinh tế cho phép tài nguyên hoặc giá trị di chuyển rộng và khó kiểm soát hơn, thường thấy khi có trading giữa người chơi."
},
{
    term: "Economic Pressure",
    definition: "Áp lực mà hệ thống tài nguyên tạo lên quyết định của người chơi, buộc họ phải ưu tiên, tiết kiệm hoặc chấp nhận rủi ro."
},
{
    term: "Dominant Loop",
    definition: "Vòng lặp mạnh đến mức nuốt hết các loop còn lại, làm người chơi tối ưu một hành vi duy nhất và phá sự đa dạng."
},
{
    term: "Secondary Loop",
    definition: "Vòng lặp phụ hỗ trợ, bổ sung hoặc làm giàu loop chính mà không được phép lấn át nó."
},
{
    term: "Loop Health",
    definition: "Mức độ một gameplay loop còn giữ được giá trị sau nhiều lần lặp, không sụp đổ vì nhàm, exploit hoặc reward cạn."
},
{
    term: "Loop Collapse",
    definition: "Khi một loop mất ý nghĩa vì người chơi tìm ra cách phá, reward không còn hấp dẫn hoặc decision space bị co lại."
},
{
    term: "Retention Driver",
    definition: "Yếu tố cụ thể khiến người chơi quay lại game như progress dang dở, social obligation, event, build chưa hoàn thiện hoặc reward hẹn giờ."
},
{
    term: "Engagement Driver",
    definition: "Yếu tố thúc đẩy người chơi ở lại lâu hơn trong một phiên chơi như nhiệm vụ dây chuyền, challenge, social play hoặc dopamine reward."
},
{
    term: "Behavior Shaping",
    definition: "Thiết kế phần thưởng, giới hạn và phản hồi để dần uốn hành vi người chơi theo hướng mong muốn."
},
{
    term: "Habit Formation",
    definition: "Quá trình game xây dựng thói quen quay lại thông qua nhịp reward, mục tiêu ngắn hạn và cảm giác mất mát nếu bỏ lỡ."
},
{
    term: "Compounding Value",
    definition: "Giá trị tăng dần theo thời gian khi một quyết định sớm tạo lợi ích lũy kế về sau."
},
{
    term: "Delayed Gratification",
    definition: "Thiết kế để người chơi chấp nhận nhịn lợi ích trước mắt nhằm đạt phần thưởng lớn hơn ở tương lai."
},
{
    term: "Immediate Gratification",
    definition: "Phần thưởng đến ngay sau hành động để củng cố học tập, duy trì hứng thú và tạo cảm giác phản hồi nhanh."
},
{
    term: "Payoff Horizon",
    definition: "Khoảng thời gian từ lúc người chơi đầu tư đến lúc họ nhận được giá trị thực sự từ đầu tư đó."
},
{
    term: "Progression Pacing",
    definition: "Nhịp độ mà game trao sức mạnh, nội dung mới và cảm giác tiến bộ cho người chơi."
},
{
    term: "Progression Trough",
    definition: "Khoảng chững trong tiến trình nơi người chơi không cảm thấy mạnh hơn, không mở khóa gì đáng kể và dễ mất động lực."
},
{
    term: "Power Budget",
    definition: "Ngân sách sức mạnh mà designer phân bổ cho class, build, item hoặc encounter để giữ balance tổng thể."
},
{
    term: "Complexity Budget",
    definition: "Giới hạn lượng độ phức tạp mà một feature, system hoặc giai đoạn game được phép gánh."
},
{
    term: "Attention Budget",
    definition: "Lượng chú ý hữu hạn mà người chơi có thể dành cho các yếu tố trên màn hình hoặc trong một thời điểm."
},
{
    term: "Noise Floor",
    definition: "Mức độ thông tin, hiệu ứng hoặc tín hiệu nền thấp nhất trên màn hình trước khi mọi thứ bắt đầu khó đọc."
},
{
    term: "Signal-to-Noise Ratio",
    definition: "Tỉ lệ giữa thông tin thật sự quan trọng và phần rác gây nhiễu trong UI, VFX, âm thanh hoặc level."
},
{
    term: "Saliency",
    definition: "Mức độ một yếu tố nổi bật và tự kéo sự chú ý của người chơi."
},
{
    term: "Information Hierarchy",
    definition: "Thứ tự ưu tiên của thông tin mà game muốn người chơi nhận ra đầu tiên, thứ hai, thứ ba."
},
{
    term: "Information Scent",
    definition: "Dấu hiệu nhỏ cho người chơi cảm giác rằng đi theo hướng này sẽ dẫn tới giá trị, bí mật hoặc mục tiêu."
},
{
    term: "Breadcrumb Economy",
    definition: "Cách phân bổ những tín hiệu dẫn đường nhỏ sao cho người chơi luôn có mồi để theo nhưng vẫn thấy mình tự khám phá."
},
{
    term: "Curiosity Gap",
    definition: "Khoảng thiếu thông tin vừa đủ khiến người chơi muốn tiến thêm để biết tiếp chuyện gì sẽ xảy ra."
},
{
    term: "Mystery Box Design",
    definition: "Thiết kế che giấu một phần thông tin hoặc phần thưởng để kích thích tò mò và dự đoán."
},
{
    term: "Onboarding Debt",
    definition: "Hậu quả tích tụ khi game không dạy đúng từ đầu, khiến về sau phải vá bằng tooltip, pop-up hoặc ép tutorial dài dòng."
},
{
    term: "Reinforcement Learning",
    definition: "Trong bối cảnh design, là cách game dùng phần thưởng và hình phạt để khiến người chơi tự học hành vi hiệu quả."
},
{
    term: "Mechanical Literacy",
    definition: "Mức độ người chơi hiểu ngôn ngữ mechanic của game và biết áp dụng chúng chính xác."
},
{
    term: "Pattern Literacy",
    definition: "Khả năng đọc quy luật lặp, biến thể và tín hiệu của boss, puzzle hoặc AI."
},
{
    term: "Knowledge Check",
    definition: "Thử thách kiểm tra xem người chơi đã hiểu một luật, một pattern hoặc một hệ thống nào đó chưa."
},
{
    term: "Execution Check",
    definition: "Thử thách kiểm tra khả năng thao tác và timing thay vì kiểm tra kiến thức."
},
{
    term: "Build Check",
    definition: "Thử thách kiểm tra xem người chơi đã chuẩn bị build, item hoặc loadout đủ đúng chưa."
},
{
    term: "Stat Check",
    definition: "Tình huống kết quả phụ thuộc quá nặng vào chỉ số thay vì kỹ năng hoặc chiến thuật."
},
{
    term: "Soft Skill Check",
    definition: "Bài test nhắm vào kỹ năng khó định lượng như kiên nhẫn, quan sát, định vị, quản lý áp lực hoặc đọc đối thủ."
},
{
    term: "Mechanical Depth",
    definition: "Chiều sâu đến từ việc một mechanic đơn lẻ có nhiều ứng dụng, timing, trạng thái và tương tác hơn vẻ ngoài ban đầu."
},
{
    term: "Mechanical Expression",
    definition: "Mức độ mà người chơi có thể thể hiện trình độ thông qua việc dùng mechanic một cách tinh vi."
},
{
    term: "Verb Compression",
    definition: "Kỹ thuật làm cho một hành động cơ bản có nhiều công dụng tùy ngữ cảnh thay vì thêm quá nhiều nút riêng."
},
{
    term: "Orthogonality",
    definition: "Mức độ các hệ thống hoặc lựa chọn khác nhau tạo ra giá trị khác nhau thay vì chỉ là phiên bản đổi màu của nhau."
},
{
    term: "Lateral Choice",
    definition: "Lựa chọn mở ra phong cách chơi khác chứ không đơn thuần là mạnh hơn."
},
{
    term: "Vertical Choice",
    definition: "Lựa chọn chủ yếu làm tăng sức mạnh trực tiếp theo trục hơn-kém rõ ràng."
},
{
    term: "Build Commitment",
    definition: "Mức độ mà người chơi bị khóa vào hướng build sau một chuỗi lựa chọn đầu tư."
},
{
    term: "Respec Pressure",
    definition: "Áp lực khiến người chơi muốn reset build vì meta, sai lầm trước đó hoặc nội dung sau yêu cầu khác."
},
{
    term: "Degenerate Play",
    definition: "Hành vi tối ưu nhưng phá trải nghiệm, ví dụ đứng farm vô hạn, kite ngu AI, spam một giải pháp duy nhất."
},
{
    term: "Exploit Surface",
    definition: "Tổng số điểm mà hệ thống có thể bị người chơi lợi dụng để phá balance hoặc bypass ý đồ thiết kế."
},
{
    term: "Failing Gracefully",
    definition: "Thiết kế để khi người chơi chơi chưa tốt, họ vẫn hiểu chuyện gì xảy ra và còn động lực thử lại."
},
{
    term: "Punishment Clarity",
    definition: "Mức độ rõ ràng của hình phạt để người chơi thấy mình bị phạt vì gì và có thể học được gì."
},
{
    term: "Mercy Window",
    definition: "Khoảng khoan dung ngắn hệ thống cho người chơi cơ hội phục hồi thay vì bị trừng phạt liên hoàn."
},
{
    term: "Recovery Arc",
    definition: "Quãng chuyển từ trạng thái thua thiệt quay lại trạng thái có thể kiểm soát tình hình."
},
{
    term: "Tension Curve",
    definition: "Đường lên xuống của áp lực, nguy hiểm và kỳ vọng cảm xúc trong một đoạn chơi."
},
{
    term: "Release Valve",
    definition: "Khoảng thở có chủ đích sau áp lực cao, giúp người chơi hồi phục tinh thần và tái sẵn sàng cho đợt tiếp theo."
},
{
    term: "Pressure Stack",
    definition: "Việc chồng nhiều nguồn áp lực cùng lúc như thời gian, địch, tài nguyên thiếu, tầm nhìn xấu và mục tiêu phụ."
},
{
    term: "Tempo Control",
    definition: "Khả năng của game hoặc người chơi trong việc ép nhịp trận đấu nhanh lên hoặc chậm lại."
},
{
    term: "Initiative",
    definition: "Lợi thế về quyền ra nhịp hoặc buộc đối thủ phải phản ứng theo mình."
},
{
    term: "Threat Projection",
    definition: "Phạm vi và cách một đơn vị, skill hoặc hệ thống tạo vùng nguy hiểm mà đối thủ phải tôn trọng."
},
{
    term: "Zone Control",
    definition: "Khả năng kiểm soát không gian, ép đường đi hoặc cấm đối thủ đứng ở một khu vực."
},
{
    term: "Space Denial",
    definition: "Tạo nguy hiểm ở một vùng để buộc người chơi khác rời đi, đi vòng hoặc trì hoãn hành động."
},
{
    term: "Positional Advantage",
    definition: "Lợi thế đến từ địa hình, tầm nhìn, khoảng cách, cao độ hoặc đường rút."
},
{
    term: "Temporal Advantage",
    definition: "Lợi thế đến từ việc hành động sớm hơn, hồi chiêu nhanh hơn hoặc ép đối thủ lỡ nhịp."
},
{
    term: "Action Economy",
    definition: "Giá trị tương đối của mỗi hành động trong một lượt, một nhịp combat hoặc một khoảng thời gian ngắn."
},
{
    term: "Turn Efficiency",
    definition: "Mức độ người chơi tận dụng tối đa giá trị từ một lượt hoặc một chu kỳ hành động."
},
{
    term: "Dead Turn",
    definition: "Lượt chơi không tạo giá trị đáng kể, thường do thiếu lựa chọn tốt hoặc design quá bó tay."
},
{
    term: "Dead Stat",
    definition: "Chỉ số tồn tại nhưng hiếm khi quan trọng hoặc không đủ tác động để người chơi quan tâm."
},
{
    term: "Stat Saturation",
    definition: "Khi tăng thêm chỉ số gần như không còn cảm nhận rõ vì đã chạm trần hữu dụng."
},
{
    term: "Diminishing Returns",
    definition: "Cơ chế khiến đầu tư thêm vào cùng một hướng cho lợi ích giảm dần, nhằm chặn việc dồn một chỉ số vô hạn."
},
{
    term: "Break Point",
    definition: "Ngưỡng mà khi vượt qua, hiệu quả của build, skill hoặc chiến thuật thay đổi rõ rệt."
},
{
    term: "Threshold Design",
    definition: "Thiết kế xoay quanh các mốc kích hoạt có ý nghĩa thay vì tăng tuyến tính đều đều."
},
{
    term: "Granularity",
    definition: "Mức độ mịn hay thô của các bước điều chỉnh, ví dụ damage tăng từng 1 điểm hay từng 10 điểm."
},
{
    term: "Parameter Sensitivity",
    definition: "Mức độ một thay đổi nhỏ ở tham số có thể tạo ảnh hưởng lớn đến trải nghiệm tổng thể."
},
{
    term: "Tuning Levers",
    definition: "Những tham số mà designer có thể kéo lên xuống để chỉnh trải nghiệm mà không phải viết lại hệ thống."
},
{
    term: "Design Surface Area",
    definition: "Tổng số điểm mà một feature chạm vào các hệ thống khác, từ đó quyết định chi phí làm, test và balance."
},
{
    term: "Cascade Effect",
    definition: "Hiệu ứng dây chuyền khi thay đổi một biến nhỏ nhưng làm rung chuyển nhiều hệ thống liên quan."
},
{
    term: "Dependency Web",
    definition: "Mạng lưới phụ thuộc giữa các tính năng, content và hệ thống, càng rối càng khó sửa mà không vỡ chỗ khác."
},
{
    term: "Content Throughput",
    definition: "Tốc độ mà team có thể sản xuất, kiểm thử và đẩy nội dung mới vào game một cách ổn định."
},
{
    term: "Content Scalability",
    definition: "Khả năng một hệ thống tiếp nhận thêm nhiều content mới mà không đội chi phí vận hành quá mức."
},
{
    term: "System Burden",
    definition: "Gánh nặng mà một hệ thống áp lên nhận thức người chơi, QA, balance, content pipeline và live ops."
},
{
    term: "Live Balance",
    definition: "Quá trình điều chỉnh game đang vận hành thật với dữ liệu và phản hồi cộng đồng thay vì chỉ dựa trên cảm giác nội bộ."
},
{
    term: "Meta Stability",
    definition: "Mức độ meta giữ được sự đa dạng và không bị một lời giải duy nhất thống trị quá lâu."
},
{
    term: "Meta Volatility",
    definition: "Mức độ meta thay đổi nhanh sau patch, khám phá mới hoặc tối ưu từ cộng đồng."
},
{
    term: "Patch Shock",
    definition: "Cú sốc lên meta và hành vi cộng đồng sau một bản cập nhật lớn hoặc một thay đổi balance mạnh."
},
{
    term: "Player Segmentation by Intent",
    definition: "Phân nhóm người chơi theo mục đích đến với game như cạnh tranh, khám phá, social, collection hoặc chill."
},
{
    term: "Psychographic Segmentation",
    definition: "Phân nhóm người chơi theo động lực và kiểu hành vi tâm lý thay vì chỉ theo tuổi, quốc gia hoặc thiết bị."
},
{
    term: "Motivation Conflict",
    definition: "Khi một hệ thống phục vụ rất tốt một nhóm động lực người chơi nhưng lại làm hại nhóm khác."
},
{
    term: "Design for Aspiration",
    definition: "Thiết kế để người chơi luôn nhìn thấy phiên bản giỏi hơn của chính mình và có lý do để leo tới đó."
},
{
    term: "Skill Gradient",
    definition: "Độ dốc tăng trưởng kỹ năng từ người mới tới cao thủ. Gradient đẹp giúp học lên đều, không bị vách đá."
},
{
    term: "Learning Cliff",
    definition: "Điểm mà độ khó học tăng gắt tới mức nhiều người chơi rơi rụng vì không theo kịp."
},
{
    term: "Discovery Layer",
    definition: "Lớp nội dung hoặc mechanic mà người chơi chỉ nhận ra sau khi đã chơi đủ lâu hoặc quan sát đủ sâu."
},
{
    term: "Hidden Depth",
    definition: "Chiều sâu không phô trương ngay từ đầu nhưng dần lộ ra khi người chơi đầu tư thời gian và kỹ năng."
},
{
    term: "Surface Appeal",
    definition: "Sức hút ở lớp nhìn đầu tiên như hình ảnh, premise, motion, immediate feedback hoặc control dễ vào."
},
{
    term: "Depth Curve",
    definition: "Cách chiều sâu của game mở ra dần theo thời gian thay vì đập toàn bộ vào mặt người chơi từ phút đầu."
},
{
    term: "Clarity under Load",
    definition: "Khả năng game vẫn giữ rõ ràng khi màn hình đông đúc, hiệu ứng dày và áp lực cao."
},
{
    term: "Compression Test",
    definition: "Bài kiểm tra xem hệ thống có còn ổn khi nhét nhiều tác nhân cùng lúc vào một không gian hoặc thời điểm."
},
{
    term: "Extensibility",
    definition: "Khả năng một hệ thống được thiết kế từ đầu để sau này cắm thêm mechanic, content hoặc rule mới mà không phải đập đi xây lại."
},
{
    term: "Design Robustness",
    definition: "Mức độ một hệ thống còn giữ được chất lượng khi bị người chơi thử đủ kiểu, khi content tăng và khi meta tiến hóa."
},
{
    term: "System Fragility",
    definition: "Mức độ một hệ thống dễ gãy, dễ bị exploit hoặc dễ mất cân bằng khi có thay đổi nhỏ."
},
{
    term: "Golden Path",
    definition: "Lộ trình lý tưởng mà designer mong phần lớn người chơi sẽ đi qua để hiểu game đúng và thấy vui nhất."
},
{
    term: "Critical Path",
    definition: "Đường tiến trình tối thiểu cần hoàn thành để đi tới mục tiêu chính của game hoặc một mốc nội dung."
},
{
    term: "Off-Path Rewarding",
    definition: "Thiết kế thưởng cho người chơi lệch khỏi đường chính bằng bí mật, lore, tài nguyên hoặc shortcut."
},
{
    term: "Spatial Storytelling",
    definition: "Kể chuyện thông qua sắp xếp không gian, tuyến đường, tầm nhìn và quan hệ giữa các khu vực."
},
{
    term: "Encounter Read",
    definition: "Khoảnh khắc người chơi quan sát một tình huống và hiểu nhanh mối đe dọa, cơ hội và hướng tiếp cận."
},
{
    term: "Encounter Solve",
    definition: "Cách người chơi thực thi lời giải cho một encounter sau khi đã đọc được bài toán của nó."
},
{
    term: "Encounter Replay Variance",
    definition: "Mức độ cùng một encounter vẫn cho ra trải nghiệm khác nhau ở các lần chơi lại."
},
{
    term: "Authored Challenge",
    definition: "Thử thách được dàn dựng thủ công để kiểm tra rất cụ thể một kỹ năng, insight hoặc cảm xúc."
},
{
    term: "Systemic Challenge",
    definition: "Thử thách nảy sinh từ va chạm giữa các hệ thống chung, ít phụ thuộc script riêng từng màn."
},
{
    term: "Friction as Feature",
    definition: "Khi sự khó chịu nhỏ có chủ đích được giữ lại để tạo căng thẳng, nhập vai hoặc chiều sâu thay vì bị xóa sạch."
},
{
    term: "Elegance",
    definition: "Mức độ game đạt được chiều sâu lớn bằng số luật ít, rõ và liên kết đẹp."
},
{
    term: "Designerly Economy",
    definition: "Khả năng dùng ít công cụ, ít luật, ít content hơn nhưng khai thác ra nhiều trải nghiệm hơn."
},
{
    term: "Player Authorship",
    definition: "Mức độ người chơi cảm thấy câu chuyện, cách chơi hoặc chiến thắng là do chính họ tạo ra chứ không phải game dắt tay hoàn toàn."
},
{
    term: "Expressive Play",
    definition: "Lối chơi cho phép người chơi bộc lộ cá tính, gu chiến thuật hoặc phong cách riêng thông qua hệ thống."
},
{
    term: "Aspirational Content",
    definition: "Nội dung mà nhiều người chơi chưa chạm tới ngay nhưng nhìn vào là muốn luyện để chinh phục."
},
{
    term: "Mastery Payoff",
    definition: "Phần thưởng cảm xúc và hiệu quả hệ thống mà người chơi nhận được khi thật sự hiểu sâu và làm chủ game."
},
{
    term: "Lasting Depth",
    definition: "Chiều sâu còn đứng vững sau hàng chục giờ, hàng trăm giờ và sau cả khi cộng đồng đã tối ưu rất nhiều."
},
{
    term: "System Ownership",
    definition: "Mức độ một hệ thống tự chịu trách nhiệm tạo ra giá trị gameplay của chính nó thay vì phải dựa quá nhiều vào hệ khác để cứu."
},
{
    term: "System Identity",
    definition: "Bản sắc riêng khiến một hệ thống được nhận ra ngay qua cách nó tạo quyết định, cảm xúc và nhịp chơi."
},
{
    term: "Mechanic Identity",
    definition: "Điểm làm một mechanic khác biệt và đáng tồn tại thay vì chỉ là bản reskin của mechanic khác."
},
{
    term: "Feature Justification",
    definition: "Lý do tồn tại thật sự của một feature trong sản phẩm. Không chứng minh được nó phục vụ pillar, fantasy hoặc KPI nào thì nên cắt."
},
{
    term: "Design Redundancy",
    definition: "Khi nhiều feature khác nhau lại đang giải cùng một vấn đề theo cách gần như giống nhau, làm game phình và nhạt."
},
{
    term: "Feature Cannibalization",
    definition: "Khi một feature mới ăn mất giá trị, thời gian chơi hoặc động lực của feature cũ."
},
{
    term: "Value Competition",
    definition: "Sự cạnh tranh giữa các hoạt động trong game để giành thời gian, tài nguyên và sự chú ý của người chơi."
},
{
    term: "Choice Compression",
    definition: "Hiện tượng nhiều lựa chọn nhìn thì nhiều nhưng bị co lại thành một vài lựa chọn thật sự khả thi."
},
{
    term: "Option Paralysis",
    definition: "Trạng thái người chơi bị ngợp vì quá nhiều lựa chọn mà thiếu tín hiệu để quyết định."
},
{
    term: "Decision Fatigue",
    definition: "Sự mệt mỏi khi game bắt người chơi ra quá nhiều quyết định liên tục mà không có nhịp nghỉ hoặc ưu tiên rõ."
},
{
    term: "System Overhead",
    definition: "Chi phí nhận thức và thao tác mà người chơi phải gánh chỉ để tương tác với hệ thống trước khi thấy vui."
},
{
    term: "Interface Tax",
    definition: "Phần đau khổ do UI hoặc flow tệ gây ra, khiến việc làm một hành động đơn giản trở nên phiền và chậm."
},
{
    term: "Interaction Cost",
    definition: "Cái giá nhỏ về click, input, thời gian hoặc chú ý mà người chơi phải trả để thực hiện một hành động."
},
{
    term: "Action Friction",
    definition: "Ma sát trong thao tác. Có lúc cần giảm để mượt, có lúc phải giữ để tạo trọng lượng quyết định."
},
{
    term: "Intent Clarity",
    definition: "Mức độ game hiểu đúng ý định của người chơi từ input và biến nó thành hành động họ mong đợi."
},
{
    term: "Action Readiness",
    definition: "Mức độ mà một hành động luôn sẵn sàng và dễ truy cập đúng lúc người chơi cần."
},
{
    term: "Mechanical Honesty",
    definition: "Sự nhất quán giữa thứ game thể hiện và thứ game thật sự tính toán bên dưới. Lệch nhau thì người chơi mất niềm tin."
},
{
    term: "Simulation Depth",
    definition: "Độ sâu đến từ việc hệ thống mô phỏng thế giới hoặc đối tượng theo logic nội tại thay vì script cứng."
},
{
    term: "Abstraction Layer",
    definition: "Tầng giản lược dùng để biến một hiện tượng phức tạp thành luật chơi dễ hiểu và dễ thao tác hơn."
},
{
    term: "Representational Fidelity",
    definition: "Mức độ hệ thống thể hiện đúng hoặc gần đúng với thứ nó đang mô phỏng hay hứa hẹn."
},
{
    term: "Designer Intent Leakage",
    definition: "Khi người chơi nhìn xuyên qua trải nghiệm và thấy quá rõ bàn tay dàn dựng của designer, làm mất nhập vai hoặc agency."
},
{
    term: "Invisible Hand Design",
    definition: "Kiểu thiết kế dắt người chơi rất mạnh nhưng khiến họ cảm thấy mọi thứ là lựa chọn tự nhiên của chính mình."
},
{
    term: "Agency Preservation",
    definition: "Kỹ thuật giữ cảm giác chủ động của người chơi ngay cả khi game cần giới hạn, sửa hướng hoặc bảo vệ pacing."
},
{
    term: "Soft Correction",
    definition: "Cách game âm thầm chỉnh người chơi về hướng an toàn hoặc đúng flow mà không phạt thẳng mặt."
},
{
    term: "Hard Correction",
    definition: "Cách game ép người chơi quay về quỹ đạo bằng rào cản trực tiếp như khóa cửa, reset vị trí hoặc thất bại."
},
{
    term: "Failure Recovery Design",
    definition: "Thiết kế toàn bộ hành trình sau thất bại, từ thời gian load, khoảng cách quay lại, thông tin học được đến động lực thử tiếp."
},
{
    term: "Retry Friction",
    definition: "Mức độ đau đớn giữa hai lần thử, bao gồm chờ, load, di chuyển lại, xem lại cutscene hoặc thao tác thừa."
},
{
    term: "Attempt Velocity",
    definition: "Tốc độ mà người chơi có thể bước vào lần thử tiếp theo sau khi thất bại. Cao thì học nhanh, thấp thì nản."
},
{
    term: "Learning Velocity",
    definition: "Tốc độ mà người chơi rút ra bài học hữu ích từ mỗi lần chơi, mỗi lần chết hoặc mỗi quyết định sai."
},
{
    term: "Feedback Resolution",
    definition: "Độ chi tiết của phản hồi mà game đưa ra, cho biết chính xác sai ở đâu hay chỉ nói chung chung là thua."
},
{
    term: "Punishment Severity",
    definition: "Độ nặng của hình phạt sau sai lầm. Phạt nặng không xấu, nhưng phải đi kèm clarity và lý do rõ."
},
{
    term: "Forgiveness Window",
    definition: "Khoảng nương tay cho phép người chơi suýt sai nhưng vẫn sống hoặc vẫn cứu được tình thế."
},
{
    term: "Buffer for Mastery",
    definition: "Khoảng dễ chịu ban đầu để người chơi tập kỹ năng, trước khi game đòi hỏi thực thi nghiêm túc."
},
{
    term: "Execution Ceiling",
    definition: "Trần thể hiện nằm ở thao tác, timing và precision thay vì ở build hoặc chỉ số."
},
{
    term: "Input Burden",
    definition: "Khối lượng thao tác mà một hệ thống đòi hỏi trên tay người chơi để đạt hiệu quả mong muốn."
},
{
    term: "Mechanical Tax",
    definition: "Công sức thao tác thêm mà người chơi phải bỏ ra chỉ để duy trì trạng thái tối ưu cơ bản."
},
{
    term: "Accessibility Debt",
    definition: "Hậu quả lâu dài khi game phớt lờ nhu cầu tiếp cận từ đầu, khiến sau này vá cực tốn và cực xấu."
},
{
    term: "Read Pressure",
    definition: "Áp lực buộc người chơi phải đọc nhanh và đúng tín hiệu trong thời gian ngắn."
},
{
    term: "Execution Pressure",
    definition: "Áp lực ở khâu thao tác khi người chơi biết phải làm gì nhưng việc làm đúng lại khó."
},
{
    term: "Planning Pressure",
    definition: "Áp lực ở tầng chuẩn bị, build, route hoặc phân bổ tài nguyên trước khi bước vào thử thách."
},
{
    term: "Adaptation Pressure",
    definition: "Áp lực buộc người chơi thay đổi chiến thuật liên tục thay vì spam một lời giải."
},
{
    term: "Tempo Break",
    definition: "Khoảnh khắc nhịp game bị bẻ gãy có chủ đích để reset cảm xúc, gây bất ngờ hoặc đổi mode tư duy."
},
{
    term: "Flow Interruption",
    definition: "Sự ngắt mạch trải nghiệm của người chơi do popup, loading, tutorial, UI hoặc một hệ thống chen vào không đúng lúc."
},
{
    term: "Pacing Debt",
    definition: "Sự tích tụ của những đoạn lê thê, ngắt mạch hoặc dồn dập quá mức khiến nhịp game bị méo về dài hạn."
},
{
    term: "Encounter Rhythm",
    definition: "Nhịp điệu bên trong một encounter, gồm lúc thăm dò, lúc áp lực tăng, lúc mở cửa phản công và lúc kết liễu."
},
{
    term: "Combat Cadence",
    definition: "Tần suất và nhịp luân chuyển giữa tấn công, né, hồi, reposition, dùng skill và tận dụng sơ hở."
},
{
    term: "Pressure Relief",
    definition: "Khoảnh khắc hệ thống giảm nhẹ áp lực để người chơi thở, đọc lại tình hình và tái lập kiểm soát."
},
{
    term: "Threat Layering",
    definition: "Chồng nhiều loại đe dọa khác nhau trong cùng một tình huống để tăng độ sâu đọc tình huống."
},
{
    term: "Threat Prioritization",
    definition: "Bài toán người chơi phải quyết định mối đe dọa nào cần xử lý trước trong một biển nguy hiểm."
},
{
    term: "Threat Saturation",
    definition: "Khi số lượng hoặc cường độ mối đe dọa vượt ngưỡng đọc hiểu, làm encounter vỡ và thành hỗn loạn vô nghĩa."
},
{
    term: "Encounter Decomposition",
    definition: "Cách tách một tình huống phức tạp thành các thành phần nhỏ để phân tích, test và chỉnh balance."
},
{
    term: "Solve Space",
    definition: "Số lượng hướng giải khả thi mà người chơi có thể dùng để vượt qua một bài toán gameplay."
},
{
    term: "Single-Solution Bias",
    definition: "Xu hướng thiết kế hoặc vô tình làm cho một encounter chỉ còn một cách giải thực tế."
},
{
    term: "Approach Diversity",
    definition: "Mức độ game cho phép người chơi tiếp cận cùng một tình huống bằng nhiều phong cách khác nhau."
},
{
    term: "Tactical Readability",
    definition: "Khả năng người chơi nắm được nhanh các yếu tố có ảnh hưởng ngắn hạn như cover, range, cooldown, aggro, flank."
},
{
    term: "Strategic Readability",
    definition: "Khả năng nhìn ra các hậu quả dài hạn như route, kinh tế, build path, objective timing hoặc power spike."
},
{
    term: "Burst Window",
    definition: "Khoảng thời gian ngắn mà dồn tài nguyên hoặc damage cho hiệu quả vượt trội."
},
{
    term: "Vulnerability Window",
    definition: "Khoảng thời gian mục tiêu hoặc boss lộ sơ hở rõ ràng và nên bị trừng phạt."
},
{
    term: "Commitment Window",
    definition: "Khoảng thời gian một hành động đã vào guồng và không thể dễ dàng rút ra."
},
{
    term: "Risk Window",
    definition: "Khoảng thời gian người chơi đang phơi mình trước rủi ro nếu đọc sai hoặc thực thi sai."
},
{
    term: "Skill Transfer",
    definition: "Mức độ kiến thức hoặc kỹ năng học được ở tình huống này có thể áp dụng sang tình huống khác."
},
{
    term: "Cross-System Learning",
    definition: "Khi bài học từ một hệ thống giúp người chơi hiểu hoặc chơi tốt hơn ở hệ thống khác."
},
{
    term: "Systemic Onboarding",
    definition: "Dạy người chơi thông qua chính việc tương tác với hệ thống, không tách thành lớp hướng dẫn khô cứng."
},
{
    term: "Delayed Reveal",
    definition: "Kỹ thuật chưa lộ hết chiều sâu của một mechanic ngay mà để người chơi từ từ khám phá thêm tầng mới."
},
{
    term: "Mastery Ladder",
    definition: "Chuỗi nấc tiến bộ rõ ràng từ hiểu cơ bản đến sử dụng nâng cao, tối ưu và sáng tạo."
},
{
    term: "Skill Signposting",
    definition: "Cách game cho người chơi thấy rằng vẫn còn thứ để học, để tối ưu, để trở nên giỏi hơn."
},
{
    term: "Expression Surface",
    definition: "Số lượng điểm mà game cho phép người chơi bộc lộ phong cách cá nhân, kỹ năng hoặc tư duy riêng."
},
{
    term: "Stylistic Viability",
    definition: "Mức độ một phong cách chơi khác meta vẫn có thể hoàn thành nội dung mà không quá tự hành xác."
},
{
    term: "Identity Budget",
    definition: "Giới hạn số lượng điểm khác biệt thực sự mà một class, hero hoặc feature có thể mang trước khi vượt quá khả năng đọc hiểu."
},
{
    term: "Roster Health",
    definition: "Tình trạng tổng thể của một dàn tướng, class hoặc unit xét theo độ đa dạng, tính phân vai và mức độ chồng lấn."
},
{
    term: "Role Compression",
    definition: "Khi một đơn vị hoặc build làm quá nhiều vai trò cùng lúc, khiến những vai trò chuyên biệt khác mất chỗ sống."
},
{
    term: "Role Clarity",
    definition: "Mức độ mà người chơi hiểu một class, hero hoặc unit sinh ra để làm gì trong đội hình hoặc encounter."
},
{
    term: "Role Redundancy",
    definition: "Khi nhiều nhân vật hoặc công cụ cùng đảm nhận một vai trò theo cách quá giống nhau."
},
{
    term: "Asymmetric Burden",
    definition: "Mức độ khó khăn khác nhau mà các phía trong game bất đối xứng phải gánh để đạt cùng hiệu quả."
},
{
    term: "Counter Burden",
    definition: "Chi phí mà đối thủ phải bỏ ra để đối phó một chiến thuật hoặc công cụ mạnh."
},
{
    term: "Counter Clarity",
    definition: "Mức độ mà game cho người chơi hiểu rõ rằng một thứ có thể bị khắc chế bằng cách nào."
},
{
    term: "Counter Availability",
    definition: "Mức độ các công cụ phản khắc có thật sự hiện diện, tiếp cận được và hợp lý trong bối cảnh hiện tại."
},
{
    term: "Soft Counter",
    definition: "Cách khắc chế không vô hiệu hóa hoàn toàn nhưng làm giảm đáng kể hiệu quả của đối phương."
},
{
    term: "Hard Counter",
    definition: "Khắc chế gần như trực tiếp vô hiệu hóa hoặc bóp nghẹt một chiến thuật, hero hoặc build khác."
},
{
    term: "Meta Polarization",
    definition: "Khi meta bị chia mạnh thành vài cực đối đầu nhau, làm nhiều lựa chọn trung gian mất đất diễn."
},
{
    term: "Rock-Paper-Scissors Balance",
    definition: "Mô hình cân bằng dựa trên quan hệ khắc chế vòng tròn giữa các lựa chọn."
},
{
    term: "Non-Transitive Balance",
    definition: "Dạng cân bằng mà A thắng B, B thắng C nhưng C lại có thể thắng A, tạo ra hệ đối kháng vòng."
},
{
    term: "Lopsided Matchup",
    definition: "Kèo đấu có chênh lệch quá mạnh giữa hai lựa chọn, làm trải nghiệm bị méo."
},
{
    term: "Skill Matchup",
    definition: "Mối quan hệ giữa hai bộ công cụ xét trên khả năng thực thi và đọc nhau của người chơi trình độ cao."
},
{
    term: "Economy Tension",
    definition: "Mức độ nền kinh tế ép người chơi phải cân nhắc giữa tiêu ngay, giữ lại, đầu tư hoặc mạo hiểm."
},
{
    term: "Currency Velocity",
    definition: "Tốc độ một loại tiền được tạo ra, tiêu đi và quay vòng trong nền kinh tế game."
},
{
    term: "Price Anchoring",
    definition: "Kỹ thuật dùng một mức giá tham chiếu để làm những gói khác trông hợp lý hoặc hấp dẫn hơn."
},
{
    term: "Perceived Value",
    definition: "Giá trị mà người chơi cảm thấy mình nhận được, không nhất thiết trùng với giá trị thiết kế nội bộ."
},
{
    term: "Economic Legibility",
    definition: "Mức độ người chơi hiểu nguồn ra vào tài nguyên, chi phí cơ hội và quyết định đầu tư nào là hợp lý."
},
{
    term: "Progression Inflation",
    definition: "Khi sức mạnh hoặc phần thưởng leo thang quá nhanh, làm các mốc trước đó mất ý nghĩa."
},
{
    term: "Reward Inflation",
    definition: "Hiện tượng phải tăng quà ngày càng nhiều để giữ người chơi, khiến reward cũ trở nên vô vị."
},
{
    term: "Reward Relevance",
    definition: "Mức độ phần thưởng thật sự có ích, có ý nghĩa hoặc phù hợp với trạng thái hiện tại của người chơi."
},
{
    term: "Reward Timing",
    definition: "Thời điểm game trao phần thưởng. Đúng nhịp thì rất đã, sai nhịp thì nhạt hoặc phá flow."
},
{
    term: "Reward Texture",
    definition: "Cảm giác đa dạng trong cách phần thưởng được trao, nhìn, nghe và tác động đến hệ thống."
},
{
    term: "Reward Anticipation",
    definition: "Khoảng mong chờ trước khi nhận thưởng, cực quan trọng để làm phần thưởng cảm thấy có giá."
},
{
    term: "Reward Exhaustion",
    definition: "Tình trạng người chơi bị lì với phần thưởng vì nhận quá nhiều, quá đều hoặc quá dự đoán được."
},
{
    term: "Collection Pressure",
    definition: "Áp lực tâm lý buộc người chơi muốn sở hữu trọn bộ nhân vật, item, card hoặc cosmetic."
},
{
    term: "Completion Pressure",
    definition: "Áp lực phải làm cho hết map, hết nhiệm vụ, hết thành tựu hoặc hết event trước khi bỏ lỡ."
},
{
    term: "Scarcity Design",
    definition: "Thiết kế sự khan hiếm có chủ đích để tạo giá trị, căng thẳng hoặc quyết định đầu tư."
},
{
    term: "Abundance Phase",
    definition: "Giai đoạn game cho tài nguyên dồi dào để tạo cảm giác mạnh, dễ chịu hoặc giúp onboarding mượt."
},
{
    term: "Resource Drought",
    definition: "Giai đoạn khan hiếm tài nguyên tạo áp lực sinh tồn, buộc người chơi tối ưu và ra quyết định khó."
},
{
    term: "Economy Compression",
    definition: "Khi quá nhiều loại tài nguyên hoặc đường chi tiêu bị ép lại thành vài lựa chọn tối ưu duy nhất."
},
{
    term: "Monetization Friction",
    definition: "Mức độ phiền hoặc lộ liễu của điểm kiếm tiền. Làm ngu thì phản cảm, làm khéo thì người chơi thấy hợp lý."
},
{
    term: "Ethical Monetization",
    definition: "Cách kiếm tiền không dựa quá mạnh vào thao túng tâm lý tiêu cực, thiếu minh bạch hoặc bóp trải nghiệm cốt lõi."
},
{
    term: "Conversion Intent",
    definition: "Thời điểm và lý do khiến người chơi có khuynh hướng sẵn sàng trả tiền."
},
{
    term: "Spending Motivation",
    definition: "Động cơ đằng sau hành vi nạp như tiết kiệm thời gian, thể hiện bản thân, cạnh tranh, sưu tầm hoặc ủng hộ game."
},
{
    term: "Prestige Signaling",
    definition: "Cách game cho phép người chơi thể hiện đẳng cấp, độ hiếm hoặc thành tích trước người khác."
},
{
    term: "Social Proof Loop",
    definition: "Vòng lặp trong đó người chơi thấy người khác có skin, rank, build hoặc vật phẩm rồi nảy sinh mong muốn tương tự."
},
{
    term: "Community Meta",
    definition: "Meta hình thành không chỉ từ balance mà còn từ content creator, tier list, giải đấu và niềm tin cộng đồng."
},
{
    term: "Perception Balance",
    definition: "Cân bằng ở tầng cảm nhận của cộng đồng, đôi khi khác với cân bằng thật trong dữ liệu."
},
{
    term: "Sentiment Risk",
    definition: "Nguy cơ một quyết định design đúng về số liệu nhưng bị cộng đồng ghét vì cách nó được cảm nhận."
},
{
    term: "Expectation Management",
    definition: "Quản lý kỳ vọng cộng đồng về update, balance, roadmap và lời hứa sản phẩm."
},
{
    term: "Patch Trust",
    definition: "Mức độ cộng đồng tin rằng đội ngũ làm patch hiểu game và ra quyết định có lý."
},
{
    term: "Live Service Burden",
    definition: "Gánh nặng vận hành của game sống lâu dài, gồm content cadence, event cadence, balance, support và data analysis."
},
{
    term: "Cadence Sustainability",
    definition: "Khả năng duy trì nhịp ra content hoặc event trong thời gian dài mà team không chết."
},
{
    term: "Content Burn Rate",
    definition: "Tốc độ người chơi tiêu thụ hết nội dung mới sau mỗi bản cập nhật."
},
{
    term: "Player Burnout",
    definition: "Trạng thái kiệt sức vì game đòi hỏi quá nhiều quay lại, quá nhiều event hoặc quá nhiều việc phải làm."
},
{
    term: "Obligation Loop",
    definition: "Vòng lặp giữ chân người chơi bằng cảm giác phải làm, phải check-in, phải hoàn thành chứ không hẳn vì vui."
},
{
    term: "Healthy Engagement",
    definition: "Tương tác dài hạn dựa trên niềm vui, động lực nội tại và giá trị thực chứ không chỉ FOMO hoặc nhiệm vụ cưỡng ép."
},
{
    term: "Design Sustainability",
    definition: "Mức độ một hệ thống có thể tồn tại lâu dài với team, với người chơi và với pipeline vận hành."
},
{
    term: "Content Shelf Life",
    definition: "Tuổi thọ mà một nội dung còn giữ giá trị trước khi bị chơi chán, bị power creep hoặc bị meta bỏ qua."
},
{
    term: "System Shelf Life",
    definition: "Khoảng thời gian một hệ thống còn đủ giàu để tạo quyết định trước khi bị tối ưu sạch."
},
{
    term: "Novelty Decay",
    definition: "Tốc độ cảm giác mới lạ của một feature biến mất sau khi người chơi tiếp xúc lặp lại."
},
{
    term: "Depth Retention",
    definition: "Khả năng một hệ thống vẫn còn điều để khám phá và tối ưu sau khi lớp novelty đã chết."
},
{
    term: "Production Feasibility",
    definition: "Mức độ một ý tưởng có thể được làm ra trong nguồn lực, thời gian, trình độ team và pipeline thực tế."
},
{
    term: "Implementation Risk",
    definition: "Nguy cơ kỹ thuật, content hoặc UX khiến một feature dù hay trên giấy nhưng chết khi triển khai."
},
{
    term: "Testing Surface",
    definition: "Tổng lượng trường hợp cần test của một hệ thống. Surface càng lớn, QA càng mệt và bug càng dễ lọt."
},
{
    term: "Balance Surface",
    definition: "Tổng số tương tác cần cân bằng khi một system chạm vào class, item, level, mode, AI và economy."
},
{
    term: "Content Authoring Cost",
    definition: "Chi phí tạo thêm một đơn vị nội dung mới như level, quest, hero, relic hoặc encounter."
},
{
    term: "System Maintenance Cost",
    definition: "Chi phí dài hạn để tiếp tục sửa, mở rộng, test và vận hành một hệ thống sau khi ship."
},
{
    term: "Design ROI",
    definition: "Tỉ lệ giữa giá trị gameplay hoặc kinh doanh mà một feature tạo ra và tổng chi phí để làm, test, vận hành nó."
},
{
    term: "High-Leverage Design",
    definition: "Thiết kế tạo ra nhiều giá trị lớn chỉ từ một thay đổi nhỏ nhưng đặt đúng chỗ trong hệ thống."
},
{
    term: "Low-Leverage Complexity",
    definition: "Độ phức tạp thêm vào nhiều nhưng giá trị tạo ra ít, thường là dấu hiệu feature nên bị giết."
},
{
    term: "Content Multipliers",
    definition: "Những hệ thống làm một đơn vị content có thể tái tạo nhiều trải nghiệm khác nhau, ví dụ modifiers, procedural layers, build interaction."
},
{
    term: "System Reuse Value",
    definition: "Giá trị thu được khi một hệ thống hoặc quy tắc có thể tái sử dụng ở nhiều mode, nhiều content, nhiều lớp gameplay."
},
{
    term: "Modular Tuning",
    definition: "Khả năng chỉnh từng phần nhỏ của một hệ thống mà không phải chạm vào toàn bộ kiến trúc."
},
{
    term: "Rule Cohesion",
    definition: "Mức độ các luật trong game hợp nhau, hỗ trợ nhau và cùng nói một ngôn ngữ thiết kế."
},
{
    term: "Rule Pollution",
    definition: "Khi quá nhiều ngoại lệ, luật riêng, luật vá khiến game khó học, khó nhớ và khó mở rộng."
},
{
    term: "Exception Cost",
    definition: "Cái giá phải trả khi thêm một ngoại lệ đặc biệt vào hệ thống, thường làm tăng code debt, design debt và confusion."
},
{
    term: "Pattern Library",
    definition: "Kho các mẫu thiết kế, encounter, puzzle, reward hoặc AI behavior có thể tái dùng và biến thể."
},
{
    term: "Encounter Grammar",
    definition: "Ngôn ngữ thiết kế của encounter, gồm những thành phần cơ bản và cách chúng kết hợp với nhau để tạo thử thách mới."
},
{
    term: "Level Grammar",
    definition: "Bộ quy tắc ngầm về cách một level sử dụng không gian, vật thể, gating, pacing và signposting."
},
{
    term: "Design Language",
    definition: "Tập hợp quy ước nhất quán về màu, hình, âm thanh, timing và phản hồi để người chơi học cách đọc game."
},
{
    term: "Semantic Consistency",
    definition: "Sự nhất quán về ý nghĩa của tín hiệu, ví dụ màu đỏ luôn là nguy hiểm, ánh sáng vàng luôn là hướng đi đáng chú ý."
},
{
    term: "System Readability Budget",
    definition: "Ngân sách độ rõ mà một hệ thống được phép tiêu trước khi bắt đầu làm người chơi quá tải."
},
{
    term: "Perceptual Load",
    definition: "Khối lượng thứ người chơi phải nhìn, nghe và phân loại cùng lúc để đưa ra phản ứng đúng."
},
{
    term: "Mastery Funnel",
    definition: "Con đường mà hệ thống dẫn người chơi từ tiếp xúc ban đầu đến làm chủ hoàn toàn và tối ưu tinh vi."
},
{
    term: "Aspirational Ladder",
    definition: "Chuỗi mục tiêu cao dần khiến người chơi luôn thấy còn bậc tiếp theo để chinh phục."
},
{
    term: "Endgame Elasticity",
    definition: "Khả năng phần endgame kéo giãn thời gian chơi nhờ vẫn còn mục tiêu meaningful sau khi đã xong nội dung chính."
},
{
    term: "Player-Created Goals",
    definition: "Mục tiêu do chính cộng đồng hoặc từng người chơi tự đặt ra như speedrun, no-hit, challenge run, cosplay build."
},
{
    term: "Self-Directed Play",
    definition: "Trạng thái người chơi không còn cần designer giao việc cụ thể nữa mà tự tạo niềm vui từ hệ thống."
},
{
    term: "Last-Mile Polish",
    definition: "Lớp tinh chỉnh cuối giúp game chuyển từ ổn sang đáng nhớ, thường đến từ timing, feedback, camera, audio và clarity."
},
{
    term: "Shipping Quality",
    definition: "Mức độ hoàn thiện thật sự khi phát hành, không chỉ là hết bug nặng mà còn là cảm giác sản phẩm đã được mài đến nơi đến chốn."
},
{
    term: "Frame Trap",
    definition: "Tình huống trong combat (đặc biệt game đối kháng) nơi người chơi tạo khoảng hở giả để dụ đối thủ phản đòn rồi bị trừng phạt do chênh lệch frame."
},
{
    term: "Footsies",
    definition: "Trò chơi khoảng cách và nhịp độ trong combat, nơi người chơi kiểm soát space và bait hành động thay vì lao vào tấn công trực tiếp."
},
{
    term: "Neutral Game",
    definition: "Trạng thái khi chưa bên nào có lợi thế rõ ràng, nơi kỹ năng đọc tình huống và kiểm soát khoảng cách quyết định outcome."
},
{
    term: "Spacing",
    definition: "Kỹ thuật giữ khoảng cách tối ưu để vừa gây áp lực vừa tránh bị trừng phạt."
},
{
    term: "Animation Commitment",
    definition: "Mức độ mà một animation khóa người chơi vào hành động, ảnh hưởng trực tiếp đến risk và punish."
},
{
    term: "Recovery Frames",
    definition: "Khoảng thời gian sau khi hành động kết thúc mà người chơi chưa thể làm gì, là điểm yếu để bị punish."
},
{
    term: "Active Frames",
    definition: "Khoảng thời gian hitbox của một đòn tồn tại và có thể gây sát thương."
},
{
    term: "Startup Frames",
    definition: "Thời gian từ lúc input đến khi đòn bắt đầu có hiệu lực."
},
{
    term: "Hit Confirm",
    definition: "Khả năng nhận biết đòn đã trúng hay chưa để quyết định có tiếp tục combo hay dừng lại."
},
{
    term: "Whiff Punish",
    definition: "Trừng phạt khi đối thủ tung đòn hụt (whiff), thường yêu cầu đọc và timing chính xác."
},
{
    term: "Option Select",
    definition: "Input cho phép xử lý nhiều tình huống cùng lúc, tùy theo trạng thái game mà cho ra kết quả khác nhau."
},
{
    term: "Input Priority",
    definition: "Quy tắc game quyết định input nào được ưu tiên khi nhiều input xảy ra cùng lúc."
},
{
    term: "Input Leniency",
    definition: "Mức độ game cho phép sai số trong input mà vẫn nhận đúng hành động."
},
{
    term: "Hit Priority",
    definition: "Quy tắc xác định đòn nào thắng khi hai hitbox va chạm cùng lúc."
},
{
    term: "Armor Mechanic",
    definition: "Cơ chế cho phép nhân vật chịu đòn mà không bị interrupt trong một số trường hợp."
},
{
    term: "Hyper Armor",
    definition: "Phiên bản mạnh hơn của armor, không bị stagger ngay cả khi nhận sát thương lớn."
},

// -------- ECONOMY / GACHA --------
{
    term: "Banner Rotation",
    definition: "Chu kỳ thay đổi các banner gacha để tạo cảm giác khan hiếm và thúc đẩy chi tiêu."
},
{
    term: "Rate Up",
    definition: "Tăng tỉ lệ xuất hiện của một nhân vật hoặc item cụ thể trong gacha."
},
{
    term: "Soft Pity",
    definition: "Cơ chế tăng dần tỉ lệ trúng vật phẩm hiếm khi người chơi quay nhiều lần mà chưa trúng."
},
{
    term: "Hard Pity",
    definition: "Ngưỡng đảm bảo người chơi chắc chắn nhận được vật phẩm hiếm sau số lần quay nhất định."
},
{
    term: "Whale Optimization",
    definition: "Thiết kế nhằm tối đa hóa chi tiêu từ nhóm người chơi trả nhiều tiền."
},
{
    term: "Spender Segmentation",
    definition: "Phân loại người chơi theo mức chi tiêu để tối ưu monetization."
},
{
    term: "Time Gate",
    definition: "Giới hạn tiến trình bằng thời gian nhằm kéo dài vòng đời và tăng retention."
},
{
    term: "Energy System",
    definition: "Cơ chế giới hạn số lần chơi trong một khoảng thời gian, thường gắn với monetization."
},
{
    term: "Monetization Hook",
    definition: "Điểm thiết kế khiến người chơi cảm thấy muốn chi tiền."
},

// -------- LIVE OPS / RETENTION --------
{
    term: "Content Drop",
    definition: "Việc tung nội dung mới theo từng đợt để duy trì sự quan tâm."
},
{
    term: "Event Loop",
    definition: "Vòng lặp gameplay được thiết kế riêng cho event, thường khác core loop."
},
{
    term: "Daily Quest Pressure",
    definition: "Áp lực khiến người chơi phải đăng nhập hàng ngày để không mất lợi ích."
},
{
    term: "Reactivation Trigger",
    definition: "Sự kiện hoặc phần thưởng kéo người chơi cũ quay lại game."
},
{
    term: "Session Spike",
    definition: "Tăng đột biến số người chơi hoặc thời gian chơi do event hoặc update."
},
{
    term: "Content Exhaustion",
    definition: "Tình trạng người chơi chơi hết nội dung nhanh hơn tốc độ sản xuất."
},

// -------- LEVEL DESIGN --------
{
    term: "Critical Pathing",
    definition: "Đường chính mà người chơi cần đi để hoàn thành level."
},
{
    term: "Optional Path",
    definition: "Đường phụ chứa reward hoặc bí mật, không bắt buộc."
},
{
    term: "Sightline Design",
    definition: "Cách thiết kế tầm nhìn để dẫn hướng và tạo anticipation."
},
{
    term: "Landmark Placement",
    definition: "Đặt các điểm nổi bật để giúp người chơi định hướng."
},
{
    term: "Spatial Flow",
    definition: "Cách người chơi di chuyển mượt mà qua không gian level."
},
{
    term: "Chokepoint",
    definition: "Điểm hẹp buộc người chơi phải đi qua, thường dùng để tạo combat hoặc tension."
},
{
    term: "Safe Pocket",
    definition: "Khu vực tạm an toàn trong một encounter căng thẳng."
},
{
    term: "Traversal Readability",
    definition: "Mức độ người chơi hiểu được đường đi và cách di chuyển trong môi trường."
},

// -------- NARRATIVE SYSTEM --------
{
    term: "Branch Locking",
    definition: "Cơ chế khóa một nhánh cốt truyện khi người chơi chọn nhánh khác."
},
{
    term: "Narrative Payoff",
    definition: "Khoảnh khắc phần thưởng cốt truyện đạt đỉnh sau buildup."
},
{
    term: "Foreshadowing",
    definition: "Gợi ý trước các sự kiện sẽ xảy ra trong tương lai."
},
{
    term: "Reactive Narrative",
    definition: "Cốt truyện phản ứng theo hành động của người chơi."
},
{
    term: "Systemic Narrative",
    definition: "Câu chuyện phát sinh từ gameplay thay vì script cố định."
},

// -------- MULTIPLAYER --------
{
    term: "Netcode",
    definition: "Hệ thống xử lý đồng bộ dữ liệu giữa người chơi trong multiplayer."
},
{
    term: "Latency Compensation",
    definition: "Cơ chế bù trễ để đảm bảo trải nghiệm công bằng khi mạng có delay."
},
{
    term: "Tick Rate",
    definition: "Tần suất server cập nhật trạng thái game mỗi giây."
},
{
    term: "Desync",
    definition: "Khi trạng thái game giữa client và server không đồng nhất."
},
{
    term: "Host Advantage",
    definition: "Lợi thế của người chơi host do độ trễ thấp hơn."
},
{
    term: "Match Integrity",
    definition: "Mức độ công bằng và không bị gian lận trong một trận đấu."
},
{
    term: "Smurfing",
    definition: "Người chơi giỏi dùng tài khoản mới để đấu với người yếu hơn."
},
{
    term: "Boosting",
    definition: "Hành vi tăng rank không chính đáng nhờ người khác chơi hộ hoặc kéo rank."
},
{
    term: "Queue Time Optimization",
    definition: "Cân bằng giữa thời gian chờ trận và chất lượng matchmaking."
}
];
// Sắp xếp glossary theo tên (nếu chưa có)
if (typeof glossaryData !== 'undefined') {
    glossaryData.sort((a, b) => a.term.localeCompare(b.term, 'vi', { sensitivity: 'base' }));
}

// DOM elements liên quan glossary
const glossaryTab = document.getElementById('glossaryTab');
const searchInput = document.getElementById('searchInput');
const resultCountSpan = document.getElementById('resultCount');
const termsGrid = document.getElementById('termsGrid');
const modalOverlay = document.getElementById('termModal');
const modalTitle = document.getElementById('modalTermTitle');
const modalDefinition = document.getElementById('modalDefinition');
const closeModalBtn = document.getElementById('closeModalBtn');

// Hàm escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Chọn icon ngẫu nhiên
function getRandomEpicIcon(index) {
    const icons = ['fas fa-cogs', 'fas fa-map', 'fas fa-robot', 'fas fa-cube', 'fas fa-dragon', 'fas fa-dice-d6', 'fas fa-code-branch', 'fas fa-users', 'fas fa-gamepad', 'fas fa-chess-queen'];
    return icons[index % icons.length];
}

// Render glossary
function renderTerms(filterKeyword = '') {
    const keywordLower = filterKeyword.trim().toLowerCase();
    let filteredTerms = [...glossaryData];
    if (keywordLower !== '') {
        filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(keywordLower) ||
            item.definition.toLowerCase().includes(keywordLower)
        );
    }
    resultCountSpan.innerHTML = `<i class="fas fa-layer-group"></i> ${filteredTerms.length} thuật ngữ`;
    if (filteredTerms.length === 0) {
        termsGrid.innerHTML = `<div class="no-results"><i class="fas fa-skull"></i><p>Không tìm thấy thuật ngữ "${escapeHtml(filterKeyword)}"</p></div>`;
        return;
    }
    let cardsHTML = '';
    filteredTerms.forEach((item, idx) => {
        const iconClass = getRandomEpicIcon(idx);
        cardsHTML += `
            <div class="term-card" data-term-name="${escapeHtml(item.term)}">
                <div class="card-icon"><i class="${iconClass}"></i></div>
                <div class="term-name">${escapeHtml(item.term)}</div>
                <div class="click-hint"><i class="fas fa-mouse-pointer"></i> BẤM ĐỂ XEM CHI TIẾT</div>
            </div>
        `;
    });
    termsGrid.innerHTML = cardsHTML;
}

// Mở modal glossary
function openTermModal(termName) {
    const foundTerm = glossaryData.find(item => item.term === termName);
    if (foundTerm) {
        modalTitle.innerText = foundTerm.term;
        modalDefinition.innerText = foundTerm.definition;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Đóng modal glossary
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Xử lý click nền mờ
function handleModalOverlayClick(e) {
    if (e.target === modalOverlay) closeModal();
}

// Gán sự kiện glossary
function initGlossaryEvents() {
    searchInput.addEventListener('input', (e) => renderTerms(e.target.value));
    termsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.term-card');
        if (card) openTermModal(card.dataset.termName);
    });
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', handleModalOverlayClick);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
    });
}